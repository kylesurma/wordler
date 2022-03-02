import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import KB from './KeyboardLayout';
import deleteIcon from '../public/delete.svg'
import enterIcon from '../public/enter.svg';

class Keyboard extends LitElement {
  static styles = css`
    .keyboard-container {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
      justify-content: center;
    }

    .letter {
      min-width: 30px;
      max-width: 50px;
      height: 60px;
      margin: 1.5px;
      align-items: center;
      appearance: none;
      background-color: #fcfcfd;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395a;
      cursor: pointer;
      display: inline-flex;
      font-family: 'JetBrains Mono', monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
    }

    .letter:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }

    .letter:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .letter:active,
    .letter.active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }

    .letter.not-here {
      background-color: rgba(57, 62, 65, 0.2);
    }

    .letter.wrong-spot {
      background-color: rgba(255, 136, 17, 0.2);
    }

    .letter.match {
      background-color: rgba(20, 204, 96, 0.2);
    }

    .third span:first-child,
    .third span:last-child {
      width: 50px;
    }

    img {
      position: relative;
    }

  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', e => this._handleKeypress.call(this, e));
    window.addEventListener('keyup', e => this._handleKeyup.call(this, e));
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this._handleKeypress);
    window.removeEventListener('keydown', this._handleKeyup);
    super.disconnectedCallback();
  }

  static properties = {
    keysPlayed: { type: Object, state: true },
  };

  constructor() {
    super();
    this.keysPlayed = {};
  }

  render() {

    return html`
      <div class="keyboard-container" @click=${this._handleKeyClick}>
        <div class="first row">
          ${repeat(
            KB.firstRow,
            (d, i) => i,
            key =>
              html`<span
                id=${key}
                class="letter ${this.keysPlayed[key] || ''}"
                @click=${e => this._handleKeyClick(e, key)}
                >${key.toUpperCase()}</span
              > `
          )}
        </div>
        <div class="second row">
          ${repeat(
            KB.secondRow,
            (d, i) => i,
            key =>
              html`<span
                id=${key}
                class="letter ${this.keysPlayed[key] || ''}"
                @click=${e => this._handleKeyClick(e, key)}
                >${key.toUpperCase()}</span
              > `
          )}
        </div>
        <div class="third row">
          ${repeat(
            KB.thirdRow,
            (d, i) => i,
            key => {
              const actionKey =
                key === 'backspace' || key === 'enter'
                  ? this.createActionKey(key)
                  : null;
              return html`<span
                id=${key}
                class="letter ${this.keysPlayed[key] || ''}"
                @click=${e => this._handleKeyClick(e, key)}
                >${actionKey || key.toUpperCase()}</span
              > `;
            }
          )}
        </div>
      </div>
    `;
  }
  _handleKeypress(e) {
    if (`${KB.alphabet}enterbackspace`.includes(e.key.toLowerCase())) {
      this.keyEvent(e.key.toLowerCase());
      this.renderRoot
        .querySelector(`#${e.key.toLowerCase()}`)
        .classList.add('active');
    }
  }

  _handleKeyup(e) {
    if (`${KB.alphabet}enterbackspace`.includes(e.key.toLowerCase())) {
      this.renderRoot
        .querySelector(`#${e.key.toLowerCase()}`)
        ?.classList.remove('active');
    }
  }

  _handleKeyClick(e, key) {
    this.keyEvent(key);
  }

  keyEvent(key) {
    const options = {
      detail: { letter: null, action: null },
      bubbles: true,
      composed: true,
      cancelable: true,
    };

    if (KB.alphabet.includes(key)) options.detail.letter = key;
    if (key === 'enter' || key === 'backspace') options.detail.action = key;

    if (options.detail.letter || options.detail.action) {
      const event = new CustomEvent('pressedKey', { ...options });
      this.dispatchEvent(event);
    }
  }

  createActionKey(key) {
    return key === 'backspace'
      ? html`<img src=${deleteIcon} alt="Delete" style="height: 22px;" />`
      : html`<img
          src=${enterIcon}
          alt="Enter by Bartama Graphic from NounProject.com"
          style="height: 35px; top: 5px"
        />`;
  }
}

customElements.define('wordler-keyboard', Keyboard);
