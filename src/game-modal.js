import { LitElement, html, css, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { currentMenuDisplay } from './util';

class GameModal extends LitElement {
  static properties = {
    isWin: { type: Boolean },
    isLose: { type: Boolean },
    isOptions: { type: Boolean },
    isLogin: { type: Boolean },
    word: { type:String }
  };

  static styles = css`
    .hidden {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s .25s, opacity .25s linear;
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transition: opacity .25s linear;
    }

    .menu-container {
      position: absolute;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
      padding: 20px;
    }
  `;

  constructor() {
    super();
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
      <button @click=${this._handleClose}>Ok</button>
    </div>`;
  }

  menuContent(status) {
    const display = currentMenuDisplay(status)

      // console.log('ran', action.values)
    switch (display) {
      case 'winner':
        return html`<p>isWin, baby <br> ${this.word}</p>`;
      case 'loser':
        return html`<p>isLose, baby <br> ${this.word}</p>`;
      case 'options':
        return html``;
      case 'login':
        return html``;
      default:
        return nothing;
    }
  }

  _handleClose() {
      this.isWin = false
      this.isLose = false
      this.isOptions = false
      this.isLogin = false
  }
}

customElements.define('game-modal', GameModal);
