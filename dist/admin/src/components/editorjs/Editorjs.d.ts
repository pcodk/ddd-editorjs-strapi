import React from 'react';
import { MessageDescriptor } from 'react-intl';
interface IEditorjs {
    intlLabel: MessageDescriptor;
    onChange: (event: {
        target: {
            name: string;
            value: string | null;
            type: string;
        };
    }) => void;
    attribute: {
        required: boolean;
        options: {
            [key: string]: unknown;
        };
    };
    name: string;
    description?: MessageDescriptor;
    disabled?: boolean;
    error?: string;
    labelAction?: React.ReactNode;
    value?: string;
    placeholder?: {
        defaultMessage: string;
    };
}
export declare const Editorjs: React.ForwardRefExoticComponent<IEditorjs & React.RefAttributes<any>>;
export {};
