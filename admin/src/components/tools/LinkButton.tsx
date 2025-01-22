// Created using this guide: https://walkthrough.so/pblc/QCawSCKwOQLn/creating-a-custom-editorjs-block-tool-with-react?sn=4

import ReactDOM from 'react-dom';

interface Data {
  linkText?: string;
  url?: string;
}

export class LinkButton {
  private data: Data = {};
  private nodes: { holder: HTMLElement | null } = { holder: null };

  static get toolbox() {
    return {
      title: 'LinkButton',
      icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Link"> <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>',
    };
  }

  constructor({ data }: { data: Data }) {
    this.data = data;
  }

  render() {
    const rootNode = document.createElement('div');
    this.nodes.holder = rootNode;

    const onDataChange = (newData: Data) => {
      this.data = {
        ...this.data,
        ...newData,
      };
    };

    ReactDOM.render(<Btn onDataChange={onDataChange} data={this.data} />, rootNode);

    return this.nodes.holder;
  }

  save() {
    return this.data;
  }
}

interface BtnProps {
  onDataChange: (data: Data) => void;
  data: Data;
}

function Btn({ onDataChange, data }: BtnProps) {
  return (
    <div
      style={{
        borderRadius: '4px',
        border: '1px solid #ccc',
        paddingLeft: '8px',
        paddingTop: '8px',
        paddingRight: '8px',
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
        <input
          type="text"
          placeholder="Knap Tekst"
          defaultValue={data?.linkText || ''}
          onBlur={(e) => onDataChange({ ...data, linkText: e.target.value })}
          style={{
            margin: '8px 0',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '46%',
          }}
        />
        <input
          type="url"
          placeholder="URL"
          defaultValue={data?.url || ''}
          onBlur={(e) => onDataChange({ ...data, url: e.target.value })}
          style={{
            margin: '8px 0',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '46%',
          }}
        />
      </div>
    </div>
  );
}
