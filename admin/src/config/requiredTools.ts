import AttachesTool from '@editorjs/attaches';
import Image from '@editorjs/image';
// import { auth } from "@strapi/helper-plugin";

import axios from 'axios';
import { PLUGIN_ID } from '../pluginId';

//REMOVING TEMPORARILY

/*

      additionalRequestHeaders: {
        Authorization: `Bearer ${auth.getToken()}`,
      },

*/

export const requiredTools = {
  image: {
    class: Image,
    config: {
      field: 'files.image',
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      endpoints: {
        byUrl: `/api/${PLUGIN_ID}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file: any) {
          const formData = new FormData();
          formData.append('data', JSON.stringify({}));
          formData.append('files.image', file);

          //removing auth header temporarily
          /*
            formData,
            {
              headers: {
                Authorization: `Bearer ${auth.getToken()}`,
              },
            }
          */

          const { data } = await axios.post(`/api/${PLUGIN_ID}/image/byFile`, formData);

          return data;
        },
      },
    },
  },
  attaches: {
    class: AttachesTool,
    config: {
      field: 'files.image',
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      endpoints: {
        byUrl: `/api/${PLUGIN_ID}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file: any) {
          const formData = new FormData();
          formData.append('data', JSON.stringify({}));
          formData.append('files.image', file);

          //removing auth header temporarily
          /*
           {
              headers: {
                Authorization: `Bearer ${auth.getToken()}`,
              },
            }
          */

          const { data } = await axios.post(`/api/${PLUGIN_ID}/image/byFile`, formData);

          return data;
        },
      },
    },
  },
};
