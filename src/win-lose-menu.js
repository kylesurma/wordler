import { LitElement, html, css, nothing } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

class WinLoseMenu extends LitElement {
  static properties = {
    winOrLose: { type: String },
    word: { type: String },
    definitions: { type: Array },
    currentDef: { type: Number },
  };

  static styles = css`
    :host {
      font-family: monospace;
    }

    .title {
      font-size: 3em;
      padding: 10px 0;
      font-weight: 400;
    }

    .word-container {
      display: flex;
      flex-direction: column;
      margin-top: 80px;
    }

    .word-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    span {
      font-size: 35px;
      text-align: start;
      position: relative;
      top: 6px;
    }

    .definitions-container {
      height: 250px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 100%;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      text-align: left;
      scroll-snap-type: inline mandatory;
      scrollbar-width: none;
      /* scroll-padding-inline: 20px; */
    }

    ::-webkit-scrollbar {
      display: none;
    }

    .definition {
      scroll-snap-align: start;
      padding-left: 30px;
    }

    .menu-container {
      position: absolute;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
    }
  `;

  constructor() {
    super();
    this.winOrLose = '';
    this.word = '';
    this.definitions = [];
    this.currentDef = 1;
  }

  render() {
    this.title = this.winOrLose === 'winner' ? 'You Got It!' : 'Wordled Out!';

    return html`
      <div class="title">${this.title}</div>
      <div class="word-container">
        <div class="word-title">
          <span>${this.word}</span>
          <div>${this.currentDef} of ${this.definitions.length}</div>
        </div>
        <div class="definitions-container" @scroll=${this._handleScroll}>
          ${repeat(
            this.definitions,
            (_, i) => i,
            definition => html`<p class="definition">${definition}</p>`
          )}
        </div>
      </div>
    `;
  }

  _handleScroll(e) {
    const scrollPosition = e.target.scrollLeft;

    if (scrollPosition === 0 || scrollPosition % 297 === 0) {
      this.currentDef = scrollPosition / 297 + 1;
    }
  }
}

customElements.define('win-lose-menu', WinLoseMenu);
