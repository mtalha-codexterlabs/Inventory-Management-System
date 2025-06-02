const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    uom: {
        type: String,
        required: true
    },
    stock_qty: {
        type: Number,
        required: true,
        default: 0
    },
    reorder_level: {
        type: Number,
        required: true,
        default: 0
    },
    manufacturer: {
        type: String,
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    supplier_region: {
        type: String,
        required: true
    },
    unit_cost: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    item_location: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema)
