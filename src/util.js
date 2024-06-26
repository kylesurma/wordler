
export const isWinner = guessedLetterStatus =>
guessedLetterStatus.every(n => n === 'match');

export const currentMenuDisplay = statusObj => {
    const statuses = Object.keys(statusObj)

    for (const status of statuses) {
        if (status === 'visible' || status === 'hidden') continue;
        const currentStatus = statusObj[status]
        if (currentStatus) return status
    }
}

export const initGame = {
    word: '',
    definitions: [],
    guess: [],
    guessArchive: [],
    round: 1,
    finalRound: 6,
    keysPlayed: {},
    isWon: false,
    isLose: false,
}