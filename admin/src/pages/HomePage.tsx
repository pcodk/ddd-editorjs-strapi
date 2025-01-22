import { Alert, Main } from '@strapi/design-system';
import { useState } from 'react';
import { useIntl } from 'react-intl';

const HomePage = () => {
  const { formatMessage } = useIntl();
  const [color, setColor] = useState('#FF00FF'); // Initialize state with default color

  const [value, setValue] = useState('bollocks');
  return (
    <Main>
      <Alert closeLabel="Close alert" title="Title">
        PCO Editor Sandbox
      </Alert>

      {/* <ColorPickerInput
        label="Color"
        name="color"
        value={color}
        onChange={(name, hexValue) => setColor(hexValue)}
      /> */}

      {/* <SimpleInput
        label="Simple Input"
        name="simple-input"
        value={color}
        onChange={(name, hexValue) => setColor(hexValue)}
        type='text'
        hint='This is a simple input'
        required={false}
        labelAction='balls'
        initialValue={color}
      /> */}

      {/* <EditorjsField
                intlLabel='Editorjs'
                onChange={(value)=>console.log(value)}
                attribute="attribute"
                name="name"
                description="description"
                disabled={false}
                error="error"
                labelAction="labelAction"
                required={false}
                value={value}
                placeholder="allo"
                config={false}
              /> */}
    </Main>
  );
};

export { HomePage };
