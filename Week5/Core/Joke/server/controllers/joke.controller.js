const Joke = require("../models/joke.model");

//find ALL
const getAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log(err));
};

//find just one by id
const getOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params._id })
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err));
};

const updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err));
};

const deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllJokes,
  createNewJoke,
  getOneJoke,
  updateJoke,
  deleteJoke,
};