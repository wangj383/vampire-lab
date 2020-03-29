// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model
const Vampire = require('./models/vampire');

// 3. Require your extra data source
const vampireData = require('./populateVampires');

// 4. Connect your database
mongoose.connect('mongodb://localhost:27017/vampires', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function() {
  console.log('Connected to vampires db');
});

setTimeout(() => {
  mongoose.disconnect();
}, 4000);

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.create(vampireData)
// .then(vampires => {
//     console.log(vampires)
// })
// .catch(err => {
//     console.error(err)
// })


// ### Add some new vampire data
// const vampireToAdd = {
//   name: 'Create 1',
//   hair_color: 'white',
//   eye_color: 'white',
//   dob: new Date(1921, 9, 13, 7, 47),
//   loves: ['board game'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'f',
//   victims: 3,
// }

// const vampire = new Vampire(vampireToAdd)
// vampire
// .save()
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })

// const vampireToAdd2 = {
//   name: 'Create 2',
//   hair_color: 'white',
//   eye_color: 'white',
//   dob: new Date(1921, 9, 13, 7, 47),
//   loves: ['board game'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'f',
//   victims: 3,
// }

// const vampire2 = new Vampire(vampireToAdd2)
// vampire2
// .save()
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })

// const vampireToAdd3 = {
//   name: 'Create 3',
//   hair_color: 'white',
//   eye_color: 'white',
//   dob: new Date(1921, 9, 13, 7, 47),
//   loves: ['board game'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 3,
// }

// const vampire3 = new Vampire(vampireToAdd3)
// vampire3
// .save()
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })


// const vampireToAdd4 = {
//   name: 'Create 4',
//   hair_color: 'white',
//   eye_color: 'white',
//   dob: new Date(1921, 9, 13, 7, 47),
//   loves: ['board game'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 3,
// }

// const vampire4 = new Vampire(vampireToAdd4)
// vampire4
// .save()
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison


// Q1
Vampire.find({gender: 'f'})
// .then (v => {
//   console.log(v)
// })
// .catch(err => {
//   console.error(err)
// })

// Q2

Vampire.find({victims: { $gt: 500}})
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })
// alternative function:
// Vampire.find().where('victims').gt(500)


// Q3
Vampire.find({victims: { $lte: 150}})
// .then(v => {
//     console.log(v)
// }).catch(err => {
//     console.error(err)
// })

// Q4
Vampire.find({victims: { $ne: 210234}})

// Q5
Vampire.find({ $and: [{victims:{$gt: 150}},{victims: {$lt: 500}}]})

/////////////////////////////////////////////////
// ### Select by exists or does not exist


// Q1
Vampire.find({title: { $exists: true}})

// Q2
Vampire.find({victims: { $exists: false}})

// Q3
Vampire.find({ $and: [{victims:{$exists: false}},{title: {$exists: true}}]})

// Q4
Vampire.find({ $and: [{victims:{$exists: false}},{victims: {$gt: 1000}}]})


/////////////////////////////////////////////////
// ### Select with OR
// Q1
Vampire.find({ location: {$in: ['New York, New York, US', 'New Orleans, Louisiana, US']}})

// Q2
Vampire.find({ loves: {$in: ['brooding', 'being tragic']}})


// Q3
Vampire.find({ $or: [{victims: {$gt: 1000}}, { loves: 'marshmallows'}] })

// Q4
Vampire.find({ $or: [{hair_color: 'red'}, {eye_color: "green"}] })
.then(v => {
  console.log(v)
}).catch(err => {
  console.error(err)
})
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
