# DS-Petful Server

Summary: This API is used to create and hold a queue of pets where they con be retrieved with GET requests to the '/pets' endpoint. The '/line' endpoint is used to generate dummy users for the petful client.

Stack: Node.JS, ExpressJS 

Live App: [petful](https://petful-client-1b8w6s7o9.now.sh/)

## Pets

Path: /pets

Methods: GET, DELETE

This endpoint responds to GET requests with the first pet in the queue. While The DELETE removes the first animal from the queue and places it at the end of the queue.

Response: 
```javascript
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute dog listening to music 1_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
```

## Users

Path: /line

Methods: GET, DELETE, POST

This endpoints GET request responds with the first user in the queue. The DELETE method removes a user from the queue. Finally the POST method places a new user in the queue.

Response: 
```javascript
  {
    user_name: 'Jesse'
  }
```

## Built by
  Daniel Kent
  Stephen Schab