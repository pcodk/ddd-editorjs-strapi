import type { Core } from '@strapi/strapi';

import pluginId from "../utils/plugin-id";

const getPluginConfig = ({ strapi }: { strapi: Core.Strapi }) => {
  return strapi.plugin(pluginId).config;
};

export default getPluginConfig;
