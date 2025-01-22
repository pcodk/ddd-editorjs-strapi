declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {
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
        };
    };
    controllers: {
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
    routes: {
        editorjs: {
            type: string;
            routes: ({
                method: string;
                path: string;
                handler: string;
                config?: undefined;
            } | {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                    auth: boolean;
                };
            })[];
        };
        'content-api': {
            type: string;
            routes: ({
                method: string;
                path: string;
                handler: string;
                config: {
                    description: string;
                    auth: boolean;
                };
            } | {
                method: string;
                path: string;
                handler: string;
                config: {
                    auth: boolean;
                    description?: undefined;
                };
            })[];
        };
    };
    services: {
        plugin: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
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
    };
    contentTypes: {};
    policies: {};
    middlewares: {};
};
export default _default;
