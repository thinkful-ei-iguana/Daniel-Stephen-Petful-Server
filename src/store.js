const Queue = require('./Classes/Queue');

const cats = new Queue();
const dogs = new Queue();
const pets = new Queue();
const lineToAdopt = new Queue();

const catsArray = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://www.publicdomainpictures.net/pictures/310000/velka/bunte-katze-dreifarbig-portrait.jpg', 
    imageDescription: 'Motley tri color cat.',
    name: 'Henry VIII',
    sex: 'Male',
    age: 8,
    breed: 'Domestic',
    story: 'Owner passed away'
  },
  {
    imageURL:'https://www.publicdomainpictures.net/pictures/30000/velka/cat-in-the-city.jpg', 
    imageDescription: 'Black Tabby.',
    name: 'Bagheera',
    sex: 'Female',
    age: 4,
    breed: 'Tabby',
    story: 'Brought in by ACO'
  },
  {
    imageURL:'https://www.publicdomainpictures.net/pictures/90000/velka/cat-1402248971N70.jpg', 
    imageDescription: 'Orange Tabby Kitten.',
    name: 'Sunshine',
    sex: 'Female',
    age: '6 months',
    breed: 'Orange Tabby',
    story: 'Born in shelter'
  }
];

const dogsArray = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://www.publicdomainpictures.net/pictures/50000/velka/dog-1373127384GhB.jpg',
    imageDescription: 'Rottweiler.',
    name: 'Stella',
    sex: 'Female',
    age: 8,
    breed: 'Rottweiler',
    story: 'Caught by ACO'
  },
  {
    imageURL: 'https://www.publicdomainpictures.net/pictures/40000/velka/boxer-dog.jpg',
    imageDescription: 'Portly Boxer.',
    name: 'Bacchus',
    sex: 'Male',
    age: 4,
    breed: 'Boxer',
    story: 'Owner couldn\'t afford to feed anymore'
  },
  {
    imageURL: 'https://www.publicdomainpictures.net/pictures/40000/velka/dog-13601642203yU.jpg',
    imageDescription: 'Chocolate Lab.',
    name: 'Luke',
    sex: 'Male',
    age: 5,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
];

function fillQueues() {
  for (let i = 0; i < catsArray.length; i++) {
    cats.enqueue(catsArray[i]);
    dogs.enqueue(dogsArray[i]);
    pets.enqueue(catsArray[i]);
    pets.enqueue(dogsArray[i]);
  } 
}

fillQueues();

module.exports = {
  cats,
  dogs,
  pets,
  lineToAdopt
};