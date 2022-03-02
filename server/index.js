const axios = require('axios');
const router = require('express').Router();

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': process.env.API_ADDRESS,
    'x-rapidapi-key': process.env.API_KEY,
  },
};

router.get('/new-word', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5&lettersmin=5`,
      options
    );

    res.send({ word: data.word });
  } catch (err) {
    next(err);
  }
});

router.post('/check-word', async (req, res, next) => {
  const { word } = req.body
  try {
    const { data } = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
      options
    );

    res.send({ isWord: data.definitions });
  } catch (error) {
    res.status(200).send({ isWord: false });
  }
});

module.exports = router;
