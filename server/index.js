const axios = require('axios');
const router = require('express').Router();

const { getWord, checkWord } = require('./util')

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': process.env.API_ADDRESS,
    'x-rapidapi-key': process.env.API_KEY,
  },
};

router.get('/new-word', async (req, res, next) => {
  try {
   const data = await getWord()
   if (data) res.send(data);
  } catch (err) {
    next(err);
  }
});

router.post('/check-word', async (req, res, next) => {
  const { word } = req.body
  try {
  
  const definitions = await checkWord(word)

    res.send({ isWord: definitions });
  } catch (error) {
    res.status(200).send({ isWord: false });
  }
});

module.exports = router;
