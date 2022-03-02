import { LitElement, html, css } from 'lit';
import startNewGame from './NewGame';
import './game-board';
import './wordler-keyboard';
import './wordler-title'
import './game-modal'


export class WordlerApp extends LitElement {
  static properties = {
    game: { type: Object, state: true },
    currentGuess: {type: Array, state: true}
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--wordler-app-background-color);
    }

    .tile {
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #FFFFFB;
      border-radius: 4px;
      padding: 20px;
    }

    .game-container {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.game = {
      guessArchive: [],
      keysPlayed: {}
    }
    this.currentGuess = [];
  }

  firstUpdated() {
    this.newGame()
  }

  willUpdate(changedProps) {
  }

  render() {

    const { guessArchive, keysPlayed, isWon, isLose, word } = this.game
    
    return html`
    <wordler-title></wordler-title>
      <div class="tile">
      <game-modal .word=${word} .isWin=${isWon} .isLose=${isLose}></game-modal>
        <div class="game-container">
          <game-board
            .guesses=${guessArchive}
            .currentGuess=${this.currentGuess}
          ></game-board>
          <wordler-keyboard
            .keysPlayed=${keysPlayed}
            @pressedKey=${this._handlePressedKey}
          ></wordler-keyboard>
        </div>
      </div>
    `;
  }
  
  async makeGuess(guess) {
    const isWord =  await this.game.submitGuess(guess, this);
    if (!isWord) {
      this.displayNotAWord = true
    }
    this.currentGuess = []
  }
  
  async newGame() {
    const newGame = await startNewGame()
    this.game = newGame
  }
  
  _handlePressedKey(e) {
    const { letter, action } = e.detail;
    const nextGuess = [...this.currentGuess];
    if (letter && nextGuess.length < 5) {
      nextGuess.push(letter);
      this.currentGuess = nextGuess;
    }
    if (action === 'enter' && nextGuess.length === 5) {
      this.makeGuess(nextGuess);
      this.currentGuess = [];
    }
    if (action === 'backspace' && nextGuess.length > 0) {
      nextGuess.pop();
      this.currentGuess = nextGuess;
    }
  }
}

customElements.define('wordler-app', WordlerApp);
