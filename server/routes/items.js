var express = require('express');
var router = express.Router();
var helpers = require('../utils/helpers');
const { v4: uuid } = require('uuid');
const { addItem, getItems, deleteItem, updateItem, getSortedItems } = require('../controllers/item.controller');

/**
 *  GET all items
 */
router.get('/', getItems);

/**
 * CREATE an item
 */
router.post('/', addItem);

/**
 * DELETE an item
 */
router.delete('/:itemId', deleteItem);

/**
 * UPDATE an item
 */
router.patch('/:itemId', updateItem);

/**
 * GET sorted items
 */
router.get('/sorted', getSortedItems);

module.exports = router;
