import type { Core } from '@strapi/strapi';
import { pluginId } from './utils';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: 'DDD-PCOEditorjs',
    plugin: pluginId,
    type: 'richtext',
    inputSize: {
      default: 12,
      isResizable: true,
    },
  });
};

export default register;
