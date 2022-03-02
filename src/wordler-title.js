import { LitElement, html, css } from 'lit';

class WordlerTitle extends LitElement {
    static properties = {
        title: {}
    }

  static styles = css`
    .title-container {
        display:flex;
    }

  .letter {
      min-width: 30px;
      max-width: 50px;
      height: 60px;
      margin: 1px;
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
      font-size: 3em
    }
  `;

  constructor() {
    super();
    this.title = ['W', 'O', 'R', 'D', 'L', 'E', 'R'];
  }

  render() {
    return html`
    <div class="title.container">
    ${this.title.map((letter) => html`
    <span class="letter">${letter}</span>
    `)}
    </div>
    `
  }
}

customElements.define('wordler-title', WordlerTitle);
