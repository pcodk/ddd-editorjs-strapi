declare const _default: {
    editorjs: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        config: (ctx: any) => Promise<void>;
        vocabulary: (ctx: any) => Promise<void>;
        link: (ctx: any) => Promise<void>;
        byFile: (ctx: any) => Promise<void>;
        byURL: (ctx: any) => Promise<void>;
    };
};
export default _default;
