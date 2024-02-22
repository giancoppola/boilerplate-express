require('dotenv').config();
let mongoose = require('mongoose');
let dbUri = `mongodb+srv://giancoppola:${process.env.MONGO_PW}@cluster0.gjnjhuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema
let personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: { type: [String] }
})
let Person = mongoose.model('Person', personSchema);
const p = new Person({name: "name", age: 28, favoriteFoods: ["1", "2"]})

const createAndSavePerson = (done) => {
    p.save((err, data) => {
      if (err) return console.log(err);
      done(null, data)
    })
};

let peeps = []
const p1 = new Person({name: "test", age: 1, favoriteFoods: ["1", "2"]})
const p2 = new Person({name: "testing", age: 2, favoriteFoods: ["2", "2"]})
const p3 = new Person({name: "testi", age: 3, favoriteFoods: ["3", "2"]})
const p4 = new Person({name: "testn", age: 4, favoriteFoods: ["4", "2"]})
peeps.push(p1, p2, p3, p4)
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
