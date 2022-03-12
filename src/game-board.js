import { LitElement, html, css, nothing } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';

class GameBoard extends LitElement {
  static styles = css`
    .game-board-container {
      display: flex;
      height: 380px;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 0 20px;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 15%;
      position: relative;
    }

    .letter-box {
      box-shadow: 1px 0px 5px 2px inset rgba(0, 0, 0, 0.2);
      background-color: #dae3e5;
      width: 18%;
      height: 100%;
      font-size: 3em;
      font-family: 'JetBrains Mono', monospace;
      text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
      color: rgb(255, 255, 255);
      font-weight: 600;
    }

    .letter-box.not-here {
      background-color: rgba(57, 62, 65, 0.8);
    }

    .letter-box.wrong-spot {
      background-color: rgba(255, 136, 17, 0.8);
    }

    .letter-box.match {
      background-color: rgba(20, 204, 96, 0.8);
    }

    .not-word {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #fff;
      width: 80%;
      height: 80%;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .not-word > p {
      font-family: monospace;
      position: relative;
      bottom: 2px;
      font-size: 16px;
    }

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

  `;

  static properties = {
    guesses: { type: Array },
    currentGuess: { type: Array, state: true },
    isNotWord: { type: Boolean },
    currentGuessStr: { type: String },
  };

  constructor() {
    super();
    this.guesses = [];
    this.currentGuess = [];
    this.currentGuessStr = '';
    this.rows = new Array(6);
    this.column = new Array(5);
  }

  willUpdate(changedProps) {
    if (changedProps.has('isNotWord')) {
      if (this.isNotWord) {
        setTimeout(() => {
          this.isNotWord = false;
        }, 1000);
      }
    }
  }

  render() {
    const notWordClasses = {
      hidden: !this.isNotWord,
      visible: this.isNotWord,
    };

    return html`
      <div class="game-board-container">
        ${repeat(
          this.rows,
          (d, i) => i,
          (_, idx) => html`
            <div class="row">
              ${this.guesses[idx]
                ? repeat(
                    this.guesses[idx].word,
                    (d, i) => i,
                    (letter, j) => html` <span
                      class="letter-box
                    guess-achive
                    ${this.guesses[idx].guessedLetterStatus[j]}"
                      >${letter.toUpperCase()}</span
                    >`
                  )
                : repeat(
                    this.column,
                    (d, i) => i,
                    (_, j) => {
                      const isCurRow = idx === this.guesses.length;
                      return html`
                        ${isCurRow && j === 0
                          ? html`<div
                              class="not-word ${classMap(notWordClasses)}"
                            >
                              <p>"${this.currentGuessStr}" is not a word</p>
                            </div>`
                          : nothing}
                        <span class="letter-box"
                          >${isCurRow && this.currentGuess[j]
                            ? this.currentGuess[j].toUpperCase()
                            : ''}</span
                        >
                      `;
                    }
                  )}
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('game-board', GameBoard);
