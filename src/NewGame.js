/* eslint-disable no-nested-ternary */
import { isWinner } from './util.js';
import { getWord, fetchIsWord } from './fetch.js';

const startNewGame = async (letterCount = 5) => {
  const { word , definitions } = await getWord(letterCount);

  class NewGame {


    constructor(newWord, definitionsArray) {
      // this.wordArray = word.split('');
      this.word = newWord
      this.definitions = definitionsArray
      this.guess = [];
      this.guessArchive = [];
      this.round = 1;
      this.finalRound = 6;
      this.keysPlayed = {};
      this.isWon = false;
      this.isLose = false;
      // this.#setWord(word)
    }

    // set #setWord (word) {
    //   this.#word = word
    //   console.log(this.#word)
    // }

    // get #getWord() {
    //   return this.#word
    // }


    async submitGuess(submission, element) {
      const isWord = await fetchIsWord(submission.join(''));

      const checkWord = this.word.split('');

      if (isWord) {
        const guessedLetterStatus = submission.map((l, i) => {
          const status =
            l === checkWord[i]
              ? 'match'
              : checkWord.includes(l)
              ? 'wrong-spot'
              : 'not-here';

          // account for multiples of letters
          if (status === 'wrong-spot') checkWord[checkWord.indexOf(l)] = '';
          if (status === 'match') checkWord[i] = '';

          // updates keyPlayed object to map out keyboard colors
          this.keysPlayed = { ...this.keysPlayed, [l]: status };

          return status;
        });

        this.animateCurrentGuess(submission, guessedLetterStatus, element);

        this.round += 1;
        this.isWon = isWinner(guessedLetterStatus);
        if (!this.isWon) this.isLose = this.round > this.finalRound;
      }
      return isWord;
    }

    animateCurrentGuess(submission, guessedLetterStatus, element) {
      const intervalLetter = new Array(5).fill(' ');
      const intervalStatus = new Array(5).fill(' ');

      let p = 0;

      this.guessArchive.push({
        word: intervalLetter,
        guessedLetterStatus: intervalStatus,
      });

      const interval = setInterval(() => {
        if (p >= 5) {
          clearInterval(interval);
        } else {
          intervalLetter[p] = submission[p];
          intervalStatus[p] = guessedLetterStatus[p];

          const whatever = {
            word: intervalLetter,
            guessedLetterStatus: intervalStatus,
          };
          const test = this.guessArchive.slice(0, this.guessArchive.length - 1);
          test.push({ ...whatever });
          this.guessArchive = test;
          p += 1;
          element.requestUpdate();
        }
      }, 250);
    }
  }
  return new NewGame(word, definitions);
};

export default startNewGame;
