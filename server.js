const express = require('express');
const cors = require('cors');
const { cats, dogs, pets } = require('./src/store');

const app = express();
const catRouter = express.Router();
const dogRouter = express.Router();
app.use(cors());
app.use(catRouter);
app.use(dogRouter);

// cat endpoints
catRouter.get('/cat', (req, res, next) => {
  res.json(cats.first.value);
});

// dog endpoints
dogRouter.get('/dog', (req, res, next) => {
  res.json(dogs.first.value);
});


// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080,()=>{
  console.log('Serving on 8080');
});