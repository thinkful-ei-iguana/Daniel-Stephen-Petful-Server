const express = require('express');
const cors = require('cors');
const { cats, dogs, pets } = require('./src/store');

const app = express();
const catRouter = express.Router();
const dogRouter = express.Router();
const petRouter = express.Router();
app.use(cors());
app.use('/cat', catRouter);
app.use('/dog', dogRouter);
app.use('/pet', petRouter);

// cat endpoints
catRouter
  .route('/')
  .get((req, res, next) => {
    res.json(cats.first.value);
  })
  .delete((req, res, next) => {
    const cat = cats.first.value;
    cats.dequeue();
    cats.enqueue(cat);
    res.end();
  });

// dog endpoints
dogRouter
  .route('/')
  .get((req, res, next) => {
    res.json(dogs.first.value);
  })
  .delete((req, res, next) => {
    const dog = dogs.first.value;
    dogs.dequeue();
    dogs.enqueue(dog);
    res.end();
  });

// pets endpoints
petRouter
  .route('/')
  .get((req, res, next) => {
    res.json(pets.first.value);
  })
  .delete((req, res, next) => {
    const pet = pets.first.value;
    pets.dequeue();
    pets.enqueue(pet);
    res.end();
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