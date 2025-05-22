// Created using this guide: https://walkthrough.so/pblc/QCawSCKwOQLn/creating-a-custom-editorjs-block-tool-with-react?sn=4

import ReactDOM from 'react-dom';

interface Data {
  text: string;
}

export class HeaderOne {
  private nodes: { holder: HTMLElement | null; data: Data | null } = { holder: null, data: null };

  static get toolbox() {
    return {
      title: 'H1x',
      icon: '<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-230.39 -230.39 921.55 921.55" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/> </g></svg>',
    };
  }

  constructor({ data }: { data: Data }) {
    this.nodes.data = data || null;
  }

  render() {
    const rootNode = document.createElement('div');
    this.nodes.holder = rootNode;

    const onDataChange = (newText: string) => {
      this.nodes.data = { text: newText };
    };

    ReactDOM.render(
      <Btn onDataChange={onDataChange} data={this.nodes.data?.text ?? null} />,
      this.nodes.holder
    );

    return this.nodes.holder;
  }

  save() {
    return this.nodes.data;
  }
}

interface BtnProps {
  onDataChange: (data: string) => void;
  data: string | null;
}

function Btn({ onDataChange, data }: BtnProps) {
  const handleChangeValue = (val: string) => {
    onDataChange(val);
  };
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
      <h4>H1x</h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <input
          type="text"
          placeholder="Overskrift"
          defaultValue={data || ''}
          onChange={(e) => handleChangeValue(e.target.value)}
          style={{
            margin: '8px 0',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}
