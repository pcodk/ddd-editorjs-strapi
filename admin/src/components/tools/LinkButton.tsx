// Created using this guide: https://walkthrough.so/pblc/QCawSCKwOQLn/creating-a-custom-editorjs-block-tool-with-react?sn=4

import React from 'react';
import ReactDOM from 'react-dom';

interface Data {
  linkText?: string;
  url?: string;
  trackingLabel?: string;
}

export class LinkButton {
  private nodes: { holder: HTMLElement | null; data: Data } = { holder: null, data: {} };

  static get toolbox() {
    return {
      title: 'LinkButton',
      icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Link"> <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>',
    };
  }

  constructor({ data }: { data: Data }) {
    this.nodes.data = data;
  }

  render() {
    const rootNode = document.createElement('div');
    this.nodes.holder = rootNode;

    const onDataChange = (newData: Data) => {
      this.nodes.data = newData;
    };

    ReactDOM.render(<Btn onDataChange={onDataChange} data={this.nodes.data} />, rootNode);

    return this.nodes.holder;
  }

  save() {
    return this.nodes.data;
  }
}

interface BtnProps {
  onDataChange: (data: Data) => void;
  data: Data;
}

function Btn({ onDataChange, data }: BtnProps) {
  const [hasTracking, setHasTracking] = React.useState(!!data.trackingLabel);

  const handleChangeValue = (val: Partial<Data>) => {
    onDataChange({ ...data, ...val });
  };

  return (
    <div
      style={{
        borderRadius: '4px',
        border: '1px solid #ccc',
        padding: '8px',
        marginTop: '2px',
        marginBottom: '2px',
      }}
    >
      <h4>Knap med link</h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p style={{ fontSize: '12px', marginTop: '8px' }}>Knap tekst:</p>

          <input
            id="text"
            type="text"
            placeholder="Knap Tekst"
            defaultValue={data?.linkText || ''}
            onChange={(e) => handleChangeValue({ linkText: e.target.value })}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p style={{ fontSize: '12px', marginTop: '8px' }}>Knap link:</p>

          <input
            id="url"
            type="url"
            placeholder="URL"
            defaultValue={data?.url || ''}
            onChange={(e) => handleChangeValue({ url: e.target.value })}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          marginTop: '8px',
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            id="hasTracking"
            checked={hasTracking}
            onChange={(e) => {
              const checked = e.target.checked;
              setHasTracking(checked);
              if (!checked) {
                handleChangeValue({ trackingLabel: undefined });
              }
            }}
            style={{ marginRight: '4px' }}
          />
          Knappen bruger tracking
        </label>
      </div>
      <div
        style={{
          paddingTop: '8px',
          display: hasTracking ? 'flex' : 'none',
          flexDirection: 'column',
        }}
      >
        <p style={{ fontSize: '12px' }}>Tracking label: </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
          }}
        >
          <input
            id="label"
            type="text"
            placeholder="Tracking label"
            defaultValue={data?.trackingLabel || ''}
            onChange={(e) => handleChangeValue({ trackingLabel: e.target.value })}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '46%',
            }}
          />
        </div>
        <p style={{ fontSize: '11px', marginTop: '4px' }}>
          Tracking label bruges til at identificere elementet i Plausible Analytics. <br /> Brug
          f.eks. linkets navn, eller filnavn hvis det er en download. Eksempler: "redbarnet.dk"
          eller "redbarnet_beskrivelse".
        </p>
      </div>
    </div>
  );
}
