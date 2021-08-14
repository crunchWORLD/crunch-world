const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const mainRouter = require(path.resolve(__dirname, './routes/mainRouter'));
const apiRouter = require(path.resolve(__dirname, './routes/apiRouter'));
const loginRouter = require(path.resolve(__dirname, './routes/loginRouter'));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// ROUTERS
app.use('/', mainRouter);
app.use('/api', apiRouter);
app.use('/login', loginRouter);

//GLOBAL ERROR HANDLER
app.use(function (err, req, res, next) {
  console.log('An error has occured!');
  res.status(400).set('Content-Type', 'json/application').json(err);
})

//CONFIRMS PORT BEING LISTENED ON
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
