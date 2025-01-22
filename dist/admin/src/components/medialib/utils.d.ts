/// <reference types="react" />
type ToggleFuncParams = {
    openStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
    indexStateSetter: React.Dispatch<React.SetStateAction<number>>;
};
export declare const getToggleFunc: ({ openStateSetter, indexStateSetter, }: ToggleFuncParams) => ((idx: number) => void);
type ChangeFuncParams = {
    indexStateSetter: React.Dispatch<React.SetStateAction<number>>;
    editor: any;
    data: {
        mime: string;
        url: string;
        height: number;
        width: number;
        size: number;
        alt: string;
        formats: any;
        name: string;
        ext: string;
    }[];
    index: number;
};
export declare const changeFunc: ({ indexStateSetter, editor, data, index }: ChangeFuncParams) => void;
export declare const changeFuncAttaches: ({ indexStateSetter, editor, data, index, }: ChangeFuncParams) => void;
export {};
