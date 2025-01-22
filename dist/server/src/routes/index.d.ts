declare const _default: {
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
export default _default;
