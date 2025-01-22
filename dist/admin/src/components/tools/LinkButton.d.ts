interface Data {
    linkText?: string;
    url?: string;
}
export declare class LinkButton {
    private data;
    private nodes;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    constructor({ data }: {
        data: Data;
    });
    render(): HTMLElement;
    save(): Data;
}
export {};
