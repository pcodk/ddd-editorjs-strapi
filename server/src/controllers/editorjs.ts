import type { Core } from '@strapi/strapi';
import ogs from 'open-graph-scraper';
// import { parseMultipartData } from "@strapi/utils";
import axios from 'axios';
import fs from 'fs';
import { LocalFileData } from 'get-file-object-from-local-path';
import path from 'path';
import { PassThrough } from 'stream';
import { getService } from '../utils';

// interface CustomSuccessResult extends SuccessResult {
//   error: false;
//   html: string;
//   response: object;
//   result: OgObject;
//   ogTitle?: string;
//   ogDescription?: string;
//   ogImage?: {
//     url: string;
//   };
// }

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  config: async (ctx) => {
    const config = await getService('plugin').getConfig();
    ctx.send(config);
  },

  vocabulary: async (ctx) => {
    const { query } = ctx.query;

    const res = await strapi.entityService.findMany('api::vocabulary.vocabulary', {
      filters: {
        name: {
          $containsi: query,
        },
      },
    });

    // We need to remake it, so it better matches the format expected
    const data = res.map((item) => ({
      ...item,
      attributes: {
        ...item,
        Name: item.name,
        Description: item.description,
        Image: item.image,
      },
    }));

    ctx.send({ data });
  },

  link: async (ctx) => {
    const result = await new Promise<{ success: number; meta: any }>((resolve) => {
      // resolve({
      //   success: 1,
      //   meta: {
      //     title: 'broken',
      //     description: 'broken',
      //     image: 'broken',
      //   },
      // });

      // @ts-ignore
      ogs(ctx.query, (error, results, response: PassThrough) => {
        console.log('error:', error);
        console.log('results:', results);
        console.log('response:', response);

        if (error || !('ogTitle' in results)) {
          resolve({ success: 0, meta: {} });
          return;
        }
        const customResults = results;
        const imageUrl = customResults.ogImage?.url
          ? { url: customResults.ogImage.url }
          : undefined;

        resolve({
          success: 1,
          meta: {
            title: customResults.ogTitle,
            description: customResults.ogDescription,
            image: imageUrl,
          },
        });
      });
    });

    ctx.send(result);
  },

  byFile: async (ctx) => {
    console.log('byFile');
    try {
      // const { files } = parseMultipartData(ctx);
      const { files } = ctx;

      const [uploadedFile] = await strapi
        .plugin('upload')
        .service('upload')
        .upload({
          data: {},
          files: Object.values(files),
        });

      ctx.send({
        success: 1,
        file: uploadedFile,
      });
    } catch (e: any) {
      ctx.send(
        {
          success: 0,
          message: e.message,
        },
        500
      );
    }
  },

  byURL: async (ctx) => {
    console.log('byURL');
    try {
      const { url }: any = ctx.request.body;
      const { name, ext } = path.parse(url);
      const filePath = `./public/${name}${ext}`;

      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data, 'binary');

      await fs.promises.writeFile(filePath, buffer);

      const fileData = new LocalFileData(filePath);

      const file = {
        path: filePath,
        name: fileData.name,
        type: fileData.type,
        size: Buffer.byteLength(buffer),
      };

      const [uploadedFile] = await strapi.plugin('upload').service('upload').upload({
        data: {},
        files: file,
      });

      await fs.promises.unlink(filePath);

      ctx.send({
        success: 1,
        file: uploadedFile,
      });
    } catch (e: any) {
      ctx.send(
        {
          success: 0,
          message: e.message,
        },
        500
      );
    }
  },
});
