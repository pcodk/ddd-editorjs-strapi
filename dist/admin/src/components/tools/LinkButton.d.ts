interface Data {
    linkText?: string;
    url?: string;
    trackingLabel?: string;
}
export declare class LinkButton {
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
