import { InlineTool } from '@editorjs/editorjs';
export declare class EmojiInlineTool implements InlineTool {
    static get isInline(): boolean;
    static get title(): string;
    static get sanitize(): {
        span: boolean;
    };
    static get isTune(): boolean;
    private dropdown;
    constructor();
    render(): HTMLSelectElement;
    replaceRange(): void;
    createDropdown(): HTMLDivElement;
    save(): {
        emoji: string;
    };
}
