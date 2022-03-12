import { LitElement, html, css, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { currentMenuDisplay } from './util';
import './win-lose-menu';

class GameModal extends LitElement {
  static properties = {
    isWin: { type: Boolean },
    isLose: { type: Boolean },
    isOptions: { type: Boolean },
    isLogin: { type: Boolean },
    word: { type: String },
    definitions: { type: Array },
  };

  static styles = css`
    .hidden {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.25s, opacity 0.25s linear;
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.25s linear;
    }

    .menu-container {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
      padding: 20px;
    }

    .button {
      width: 130px;
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

    .button:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }

    .button:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .button:active,
    .button.active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }
  `;

  constructor() {
    super();
    this.word = '';
    this.definitions = [];
  }

  render() {
    
    const classStatus = {
      hidden: !this.isLogin && !this.isOptions && !this.isLose && !this.isWin,
      visible: this.isLogin || this.isOptions || this.isLose || this.isWin,
      winner: this.isWin,
      loser: this.isLose,
      options: this.isOptions,
      login: this.isLogin,
    };

    return html` <div class="menu-container ${classMap(classStatus)}">
      ${this.menuContent(classStatus)}
      <div class="bottom-buttons">
        <button class="button" @click=${e => this._handleClose(e, 'NEW_GAME')}>
          New Game
        </button>
        <button class="button" @click=${e => this._handleClose(e, 'CLOSE')}>
          Close
        </button>
      </div>
    </div>`;
  }

  menuContent(status) {
    const display = currentMenuDisplay(status);

    switch (display) {
      case 'winner':
      case 'loser':
        return html`<win-lose-menu
          winOrLose=${display}
          .word=${this.word}
          .definitions=${this.definitions}
        ></win-lose-menu>`;
      case 'options':
        return html``;
      case 'login':
        return html``;
      default:
        return nothing;
    }
  }

  _handleClose(_, action) {
    this.isWin = false;
    this.isLose = false;
    this.isOptions = false;
    this.isLogin = false;

    if (action === 'NEW_GAME') {
      const options = {
        detail: { startNewGame: true },
        bubbles: true,
        composed: true,
        cancelable: true,
      };
      const event = new CustomEvent('startNewGame', { ...options });
      this.dispatchEvent(event);
    }
  }
}

customElements.define('game-modal', GameModal);
