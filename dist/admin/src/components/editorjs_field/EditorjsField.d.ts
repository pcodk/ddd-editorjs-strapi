import React from 'react';
import { MessageDescriptor } from 'react-intl';
interface IEditorjsField {
    intlLabel: MessageDescriptor;
    onChange: (event: {
        target: {
            name: string;
            value: string | null;
            type: string;
        };
    }) => void;
    attribute: {
        options: {
            [key: string]: unknown;
        };
    };
    name: string;
    description?: MessageDescriptor;
    disabled?: boolean;
    error?: string;
    labelAction?: React.ReactNode;
    required?: boolean;
    value?: string;
    placeholder?: {
        defaultMessage: string;
    };
    config?: any;
    id?: string;
}
declare let EditorjsFieldNew: React.FC<IEditorjsField>;
export default EditorjsFieldNew;
