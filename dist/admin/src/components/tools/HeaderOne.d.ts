interface Data {
    text: string;
}
export declare class HeaderOne {
    private nodes;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    constructor({ data }: {
        data: Data;
    });
    render(): HTMLElement;
    save(): Data | null;
}
export {};
