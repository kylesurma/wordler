const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const cookieParser = require('cookie-parser');
const result = require('dotenv').config();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

console.log(result);
module.exports = { app, prisma };

// app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './public')));

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use('/api', require('./server'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const init = async () => {
  try {
    // if (process.env.SEED === "true") {
    //   await runSeed(process.env.SEED_COUNT || 10);
    // } else {
    //   await db.sync();
    // }
    // start listening (and create a 'server' object representing our server)
    const port = process.env.PORT || 1337;
    app.listen(port, () => {
      console.log('Knock, knock');
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    });
  } catch (ex) {
    console.log(ex);
  }
};

init();
