import { type FieldValue, type InputProps } from '@strapi/strapi/admin';
import * as React from 'react';
type SimpleInputProps = InputProps & FieldValue & {
    labelAction?: React.ReactNode;
};
export declare const SimpleInput: React.ForwardRefExoticComponent<SimpleInputProps & React.RefAttributes<HTMLButtonElement>>;
export {};
