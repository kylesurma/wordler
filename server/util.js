const axios = require('axios');

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': process.env.API_ADDRESS,
    'x-rapidapi-key': process.env.API_KEY,
  },
};

const getWord = async (retries = 0) => {
  const { data } = await axios.get(
    `https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5&lettersmin=5`,
    options
  );

  if (data.results) {
    if (data.word.match(/[. -]/g) || data.word.length > 5) return getWord(retries)

    const definitions = data.results.map(word => word.definition);
    return { word: data.word, definitions };
  }

  if (retries < 10) {
    const retry = retries + 1;
    console.log('retry');
    return getWord(retry);
  } 
    
  return undefined
};

const checkWord = async word => {
  const { data } = await axios.get(
    `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
    options
  );

  console.log(data);

  if (data) return data.definitions;
};

module.exports = { getWord, checkWord };
