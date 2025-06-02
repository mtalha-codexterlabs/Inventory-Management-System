const express = require('express')
const {
    addItem, 
    getAllItems,
    getItem,
    deleteItem,
    updateItem
} = require('../controllers/itemController')

const router = express.Router()

// GET all items
router.get('/', getAllItems)

// GET single item
router.get('/:name', getItem)

// POST a new item
router.post('/', addItem)

// DELETE an item
router.delete('/:name', deleteItem)

// UPDATE an item
router.patch('/:name', updateItem)
    
module.exports = router