const Item = require('../models/itemModel')

// GET ALL ITEMS
const getAllItems = async(req,res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET A SINGLE ITEM
const getItem = async(req,res) => {
    const {name} = req.params;
    try {
        const item = await Item.findOne({ name });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST A NEW ITEM
const addItem = async(req,res) => {
    const {name, category, uom, stock_qty, reorder_level, manufacturer, supplier, supplier_region, unit_cost, currency, item_location} = req.body
    try{
        const item = await Item.create({name, category, uom, stock_qty, reorder_level, manufacturer, supplier, supplier_region, unit_cost, currency, item_location})
        res.status(200).json(item)

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// DELETE AN ITEM
const deleteItem = async(req,res) => {
    const { name } = req.params;
    try {
        const item = await Item.findOneAndDelete({ name });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE AN ITEM
const updateItem = async(req,res) => {
    const { name } = req.params;
    const updates = req.body;

    try {
        const item = await Item.findOneAndUpdate({ name }, updates, {
            new: true,
            runValidators: true
        });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    addItem,
    getAllItems,
    getItem,
    deleteItem,
    updateItem
}