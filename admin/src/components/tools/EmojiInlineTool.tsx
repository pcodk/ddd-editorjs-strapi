import { InlineTool } from '@editorjs/editorjs';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { EMOJI_LIST } from './utils/emoji-list';

export class EmojiInlineTool implements InlineTool {
  static get isInline() {
    return true;
  }

  static get title() {
    return 'Emoji';
  }

  static get sanitize() {
    return {
      span: true,
    };
  }

  static get isTune() {
    return true;
  }

  private dropdown: HTMLSelectElement;

  constructor() {
    // @ts-ignore
    this.dropdown = this.createDropdown();
  }

  render() {
    return this.dropdown;
  }

  replaceRange() {
    const range = window?.getSelection()?.getRangeAt(0);

    if (!range) {
      console.warn('No range selected');
      return;
    }

    const selectedEmoji = this.dropdown.value;

    if (!selectedEmoji) {
      console.warn('No Emoji selected');
      return;
    }

    const span = document.createElement('span');
    span.textContent = selectedEmoji;
    span.id = 'customEmoji';
    span.style.fontFamily = 'GT Maru Emoji';
    range.deleteContents();
    range.insertNode(span);
  }

  createDropdown() {
    const node = document.createElement('div');
    ReactDOM.render(
      <EmojiPopup
        onSetEmoji={(em) => {
          this.dropdown.value = em;
          this.replaceRange();
        }}
      />,
      node
    );

    return node;
  }

  save() {
    return {
      emoji: this.dropdown.value,
    };
  }
}

function EmojiPopup({ onSetEmoji }: { onSetEmoji: (emoji: string) => void }) {
  const [selected, setSelected] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <HoverButton onClick={() => setOpen(true)} />
      {open &&
        ReactDOM.createPortal(
          <div style={modalParentStyle}>
            <div style={modalChildStyle}>
              <button
                onClick={() => setOpen(false)}
                style={{ position: 'absolute', top: 10, right: 10 }}
              >
                Luk
              </button>
              <h3 style={{ position: 'absolute', top: 10, left: 10 }}>Vælg emoji</h3>
              <div style={emojiContainerStyle}>
                {EMOJI_LIST.map((emoji, ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelected(emoji)}
                    style={{
                      ...singleEmojiStyle,
                      backgroundColor: selected === emoji ? '#42FD61' : 'white',
                    }}
                  >
                    <p style={{ fontSize: 20 }} className="emoji">
                      {emoji}
                    </p>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  onSetEmoji(selected ?? '');
                  setOpen(false);
                }}
                style={selectBtnStyle}
              >
                Vælg
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function HoverButton({ onClick }: { onClick: () => void }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="emoji"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        cursor: 'pointer',
        width: 28,
        height: 28,
        borderRadius: 4,
        ...(hover ? { backgroundColor: '#f6f6f9' } : null),
      }}
      onClick={onClick}
    >
      😊
    </button>
  );
}

const modalParentStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
};
const modalChildStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: 20,
  paddingTop: 40,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const selectBtnStyle: React.CSSProperties = {
  marginTop: 16,
  backgroundColor: '#3f51b5',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  padding: '8px 16px',
  cursor: 'pointer',
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

const emojiContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'scroll',
  maxHeight: 400,
  border: '1px solid #dcdce4',
  borderRadius: 4,
};

const singleEmojiStyle: React.CSSProperties = {
  padding: 4,
  margin: 4,
  borderRadius: 4,
  cursor: 'pointer',
};
