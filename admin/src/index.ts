import { PluginIcon } from './components/PluginIcon';
import { PLUGIN_ID } from './pluginId';
import { getTranslation } from './utils/getTranslation';
import { prefixPluginTranslations } from './utils/prefixPluginTranslations';

import { reducers } from './reducers/reducers';

export default {
  register(app: any) {
    app.addReducers(reducers);
    app.customFields.register({
      name: 'DDD-PCOEditorjs',
      pluginId: PLUGIN_ID,
      type: 'richtext',
      icon: PluginIcon,
      intlLabel: {
        id: getTranslation('color-picker.label'),
        defaultMessage: 'DDD-PCOEditorjs',
      },
      intlDescription: {
        id: getTranslation('color-picker.description'),
        defaultMessage: 'An Editor field',
      },
      components: {
        Input: async () =>
          import('./components/editorjs/Editorjs').then((module) => ({
            default: module.Editorjs,
          })),
      },
      options: {
        base: [],
        advanced: [
          {
            sectionTitle: {
              id: 'editorjs.tools.settings',
              defaultMessage: 'Tools settings, enabling / disabling tools',
            },
            items: [
              {
                name: 'options.h_one',
                type: 'checkbox',
                defaultValue: false,
                intlLabel: {
                  id: 'editorjs.tools.settings.h_one',
                  defaultMessage: 'H1 enabled',
                },
              },
              {
                name: 'options.header',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.header',
                  defaultMessage: 'Header',
                },
              },
              {
                name: 'options.list',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.list',
                  defaultMessage: 'List',
                },
              },
              {
                name: 'options.checklist',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.checklist',
                  defaultMessage: 'Checklist',
                },
              },
              {
                name: 'options.image',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.image',
                  defaultMessage: 'Image',
                },
              },
              {
                name: 'options.attaches',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.attaches',
                  defaultMessage: 'Attaches',
                },
              },
              {
                name: 'options.raw',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.raw',
                  defaultMessage: 'Raw',
                },
              },
              {
                name: 'options.marker',
                type: 'checkbox',
                defaultValue: true,
                intlLabel: {
                  id: 'editorjs.tools.settings.marker',
                  defaultMessage: 'Marker',
                },
              },
              // {
              //   name: 'options.embed',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.embed',
              //     defaultMessage: 'Embed',
              //   },
              // },
              // {
              //   name: 'options.table',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.table',
              //     defaultMessage: 'Table',
              //   },
              // },
              // {
              //   name: 'options.warning',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.warning',
              //     defaultMessage: 'Warning',
              //   },
              // },
              // {
              //   name: 'options.code',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.code',
              //     defaultMessage: 'Code',
              //   },
              // },
              // {
              //   name: 'options.link_tool',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.link_tool',
              //     defaultMessage: 'Link tool',
              //   },
              // },
              // {
              //   name: 'options.quote',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.quote',
              //     defaultMessage: 'Quote',
              //   },
              // },

              // {
              //   name: 'options.delimiter',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.delimiter',
              //     defaultMessage: 'Delimiter',
              //   },
              // },
              // {
              //   name: 'options.inlineCode',
              //   type: 'checkbox',
              //   defaultValue: true,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.inlineCode',
              //     defaultMessage: 'Inline Code',
              //   },
              // },
              // {
              //   name: 'options.component',
              //   type: 'checkbox',
              //   defaultValue: false,
              //   intlLabel: {
              //     id: 'editorjs.tools.settings.component',
              //     defaultMessage: 'Component selector',
              //   },
              // },
            ],
          },
        ],
        validator: (): Record<string, any> => ({}),
      },
    });

    // app.addMenuLink({
    //   to: `plugins/${PLUGIN_ID}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: getTranslation(`${PLUGIN_ID}.label`),
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import('./pages/App');

    //     return App;
    //   },
    // });

    // app.registerPlugin({
    //   id: PLUGIN_ID,
    //   initializer: Initializer,
    //   isReady: false,
    //   name: PLUGIN_ID,
    // });
  },

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      (locales as string[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, PLUGIN_ID),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return importedTranslations;
  },
};
