import EditorJS, { API, ToolConstructable, ToolSettings } from '@editorjs/editorjs';
import VocabularyAutocomplete from 'editorjs-vocabularytune';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { MessageDescriptor } from 'react-intl';
import styled from 'styled-components';
import { customTools } from '../../config/customTools';
import { requiredTools } from '../../config/requiredTools';
import { PLUGIN_ID } from '../../pluginId';
import { MediaLibAdapter } from '../medialib/adapter';
import { MediaLibAttachesAdapter } from '../medialib/adapterAttaches';
import { MediaLibComponent } from '../medialib/Component';
import { changeFunc, changeFuncAttaches, getToggleFunc } from '../medialib/utils';
import { EmojiInlineTool } from '../tools/EmojiInlineTool';
import { LinkButton } from '../tools/LinkButton';

interface IEditorjsField {
  intlLabel: MessageDescriptor;
  onChange: (event: {
    target: {
      name: string;
      value: string | null;
      type: string;
    };
  }) => void;
  attribute: { options: { [key: string]: unknown } };
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

let EditorjsFieldNew: React.FC<IEditorjsField> = ({
  name,
  value,
  onChange,
  attribute,
  config,
  id,
  labelAction,
}) => {
  const renderTime = new Date().getTime();
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const editorInstanceRef = useRef<EditorJS | null>(null);
  const [newEditorInstance, setnewEditorInstance] = useState<API>();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setI] = useState(false);

  const setIsMediaLibOpen = (a: unknown) => {
    // Media would open randomly at render, so I added a check to prevent it from opening the first second
    const timeDiff = new Date().getTime() - renderTime;
    if (timeDiff > 1000) {
      // @ts-ignore - we expect it to be a boolean, but it returns a function
      setI(a);
    }
  };

  const [mediaLibAttachesBlockIndex, setMediaLibAttachesBlockIndex] = useState(-1);
  const [isMediaLibAttachesOpen, setIsMediaLibAttachesOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex,
    }),
    []
  );

  const mediaLibAttachesToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibAttachesOpen,
      indexStateSetter: setMediaLibAttachesBlockIndex,
    }),
    []
  );

  const handleMediaLibChange = useCallback(
    (data: any) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: newEditorInstance,
      });
      mediaLibToggleFunc(mediaLibBlockIndex);
    },
    [mediaLibBlockIndex, newEditorInstance]
  );

  const handleMediaLibAttachesChange = useCallback(
    (data: any) => {
      changeFuncAttaches({
        indexStateSetter: setMediaLibAttachesBlockIndex,
        data,
        index: mediaLibAttachesBlockIndex,
        editor: newEditorInstance,
      });
      mediaLibAttachesToggleFunc(mediaLibAttachesBlockIndex);
    },
    [mediaLibAttachesBlockIndex, newEditorInstance]
  );

  const customToolsOther: { [key: string]: ToolConstructable | ToolSettings } = {
    ...(attribute?.options?.image
      ? {
          mediaLib: {
            class: MediaLibAdapter,
            config: {
              mediaLibToggleFunc,
            },
          } as ToolSettings,
        }
      : {}),
    ...(attribute?.options?.attaches
      ? {
          mediaLibAttaches: {
            class: MediaLibAttachesAdapter,
            config: {
              mediaLibAttachesToggleFunc,
            },
          } as ToolSettings,
        }
      : {}),
  };

  useEffect(() => {
    if (!editorInstanceRef.current && editorContainerRef.current) {
      const editor = new EditorJS({
        holder: editorContainerRef.current,

        tools: {
          linkbtn: LinkButton,
          emomo: EmojiInlineTool,
          vocabulary: {
            class: VocabularyAutocomplete,
            config: {
              endpoint: `/${PLUGIN_ID}/vocabulary-lookup`,
              queryParam: 'query',
              // change this to the one from strapi api
            },
          },
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customToolsOther,
        },
        defaultBlock: 'paragraph',

        onReady: () => {
          document?.querySelector('[data-item-name="image"]')?.remove();
          document?.querySelector('[data-item-name="attaches"]')?.remove();
        },
        data: !value || value === '' ? undefined : JSON.parse(value),

        async onChange(api, _event) {
          setnewEditorInstance(api);
          api.saver.save().then((blocks) => {
            if (blocks?.blocks?.length > 0) {
              onChange({
                target: { name, value: JSON.stringify(blocks), type: 'string' },
              });
            } else {
              onChange({
                target: { name, value: null, type: 'string' },
              });
            }
          });
        },
        minHeight: config.minHeight ? config.minHeight : 100,
      });
      editor.styles = {
        ...editor.styles,
        block: 'margin: 0; padding: 0; font-size: 48px; color: red;',
        input: 'margin: 0; padding: 0; font-size: 48px; color: red;',
      };
      editorInstanceRef.current = editor;
    }

    return () => {
      if (editorInstanceRef.current && typeof editorInstanceRef.current.destroy === 'function') {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, [config]);

  return (
    <EdWrap>
      <SEditor
        style={{
          fontSize: '48px',
          color: 'red',
        }}
        ref={editorContainerRef}
      />
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
        allowedTypes={['images']}
      />
      <MediaLibComponent
        isOpen={isMediaLibAttachesOpen}
        onChange={handleMediaLibAttachesChange}
        onToggle={mediaLibAttachesToggleFunc}
        allowedTypes={['files']}
      />
    </EdWrap>
  );
};

EditorjsFieldNew = memo(EditorjsFieldNew);

const SEditor = styled.div`
  width: 100%;
`;

const EdWrap = styled.div`
  width: 100%;
`;

export default EditorjsFieldNew;
