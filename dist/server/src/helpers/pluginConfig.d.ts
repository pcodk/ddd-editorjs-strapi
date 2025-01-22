/// <reference types="lodash" />
import type { Core } from '@strapi/strapi';
declare const getPluginConfig: ({ strapi }: {
    strapi: Core.Strapi;
}) => <T = unknown>(key: import("lodash").PropertyPath, defaultVal?: T) => T;
export default getPluginConfig;
