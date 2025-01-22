import { Field, Flex } from '@strapi/design-system';
import React, { useEffect, useRef, useState } from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { usePluginConfig } from '../../hooks/usePluginConfig';
import EditorjsField from '../editorjs_field/EditorjsField';
import { useLoadCss } from '../tools/utils/loadcss';
import { SStyleWrapper } from './styles';

interface IEditorjs {
  intlLabel: MessageDescriptor;
  onChange: (event: { target: { name: string; value: string | null; type: string } }) => void;
  attribute: { required: boolean; options: { [key: string]: unknown } };
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

export const Editorjs = React.forwardRef(
  (
    {
      name,
      description,
      intlLabel,
      onChange,
      value,
      disabled,
      attribute,
      labelAction,
      placeholder,
      error,
    }: IEditorjs,
    ref: React.Ref<any>
  ) => {
    const { loadedCss } = useLoadCss();

    const { formatMessage } = useIntl();
    const { config, isLoading } = usePluginConfig();
    const [uniqueKey, setUniqueKey] = useState<string | null>(null);
    const [transitionEnded, setTransitionEnded] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    // Extracting key parts from URL
    const createKeyFromURL = () => {
      const url = new URL(window.location.href);
      const locale = url.searchParams.get('plugins[i18n][locale]');
      const parts = url.pathname.split('/');
      const apiType = parts[parts.length - 3];
      const id = parts[parts.length - 1];

      if (apiType || id || locale) {
        return `${apiType || ''}${id || ''}${locale || ''}`;
      }
      return null;
    };

    // Function to update the key
    const updateKey = () => {
      const key = createKeyFromURL();
      setUniqueKey(key);
    };

    useEffect(() => {
      const handleTransitionEnd = () => {
        setTransitionEnded(true);
      };

      const observer = new MutationObserver(() => {
        setTransitionEnded(true);
      });

      const node = nodeRef.current;
      if (node) {
        node.addEventListener('transitionend', handleTransitionEnd);
        observer.observe(node, { childList: true, subtree: true });
      }

      return () => {
        if (node) {
          node.removeEventListener('transitionend', handleTransitionEnd);
        }
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      if (transitionEnded && value) {
        updateKey();
        setTransitionEnded(false);
      }
    }, [transitionEnded, value]);

    if (!loadedCss) return null;

    return (
      <SStyleWrapper
        ref={nodeRef}
        className={error && error !== '' ? 'error' : null}
        key={uniqueKey || undefined}
      >
        <Field.Root
          id={name}
          name={name}
          hint={description && formatMessage(description)}
          required={attribute.required}
          error={error}
        >
          {config && !isLoading ? (
            <Flex
              direction={{
                initial: 'column',
              }}
              style={{
                gap: '4px',
              }}
            >
              <Field.Label
                action={labelAction}
                style={{
                  alignSelf: 'flex-start',
                }}
              >
                {/* {formatMessage(intlLabel)} */}
                Brødtekst
              </Field.Label>

              <EditorjsField
                intlLabel={intlLabel}
                onChange={onChange}
                attribute={attribute}
                name={name}
                description={description}
                disabled={disabled}
                error={error}
                labelAction={labelAction}
                required={attribute.required}
                value={value}
                placeholder={placeholder}
                config={config}
              />

              <Field.Hint />
              <Field.Error />
            </Flex>
          ) : null}
        </Field.Root>
      </SStyleWrapper>
    );
  }
);
