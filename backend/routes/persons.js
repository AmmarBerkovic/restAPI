const express = require('express');
const bcry = require('bcrypt');

const router = express.Router();

const Person = require('../database/models/Person')

router.get('/', (req, res) => {
    Person.find({})
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
})

//Save person
router.post('/', (req, res) => {
    new Person(req.body)
        .save()
        .then((person) => res.send(person))
        .catch((err) => res.send(err))
})

//Get person by name
router.get('/:name', (req, res) => {
    Person.find({ name: req.params.name })
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
})

//delete person by surname
router.delete('/:surname', (req, res) => {
    Person.deleteOne({ surname: req.params.surname })
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
})

//update persons name by surname
router.patch('/:surname', (req, res) => {
    Person.updateOne({ surname: req.params.surname }, { $set: { name: req.body.name } })
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
})

module.exports = router;