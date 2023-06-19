var express = require('express');
var router = express.Router();
var helpers = require('../utils/helpers');
const { v4: uuid } = require('uuid');

let item_list = [
    {
        "id": uuid(),
        "name": "Puppy",
        "price": 100000.0,
        "imageURL": "https://www.vets4pets.com/siteassets/species/dog/puppy/labrador-puppy-happy.jpg?w=585&scale=down",
        "description": "Cutest puppy ever! Puppies, with their adorable faces, wiggling tails, and playful antics, are the epitome of pure joy and innocence."
    },
    {
        "id": uuid(),
        "name": "Kitten",
        "price": 999999,
        "imageURL": "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80",
        "description": "Cutest kitten ever! Kittens are undoubtedly one of the most adorable and lovable creatures on this planet. With their fluffy fur, tiny paws, and innocent eyes, they captivate our hearts and bring immense joy to our lives."
    },
    {
        "id": uuid(),
        "name": "Pizza",
        "price": 15.99,
        "imageURL": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        "description": "YUuuuuuuuummmmmmyyyyyy!"
    }
]


/**
 *  GET all items
 */
router.get('/', (req, res, next) => {

  res.status(200).send(item_list);

});

/**
 * CREATE an item
 */
router.post('/', (req, res, next) => {

  const item = {id: uuid(), ...req.body};
  item_list.push(item);

  res.status(201).send(item);

});


/**
 * DELETE an item
 */
router.delete('/:itemId', (req, res, next) => {

  const id = req.params.itemId;

  item_list = item_list.filter(item => item.id !== id);

  res.status(204).send({});
})

/**
 * UPDATE an item
 */
router.patch('/:itemId', (req, res, next) => {
  const id = req.params.itemId;

  var itemIdx = item_list.findIndex(item => item.id === id);

  item_list[itemIdx] = {...item_list[itemIdx], ...req.body};

  res.status(200).send(item_list[itemIdx]);
})

/**
 * GET sorted items
 */
router.get('/sorted', (req, res, next) => {
  const sorted = [...item_list];

  if (req.query.by === 'price') {
    sorted.sort(helpers.sortByPrice);
    res.status(200).send(sorted);
  } else if (req.query.by === 'name') {
    sorted.sort(helpers.sortByName);
    res.status(200).send(sorted);
  } else {
    res.status(400).send('Bad request, please check query params');
  }

})

module.exports = router;