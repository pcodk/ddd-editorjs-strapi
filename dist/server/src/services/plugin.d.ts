import type { Core } from '@strapi/strapi';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getConfig(): Promise<{
        header: any;
        list: any;
        checklist: any;
        embed: any;
        table: any;
        warning: any;
        code: any;
        link_tool: any;
        raw: any;
        quote: any;
        marker: any;
        delimiter: any;
        inlineCode: any;
        image: any;
        attaches: any;
        component: any;
        minHeight: any;
    }>;
};
export default _default;
