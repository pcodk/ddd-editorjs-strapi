export declare class HeaderOne {
    private nodes;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    constructor({ data }: {
        data: string;
    });
    render(): HTMLElement;
    save(): string | null;
}
