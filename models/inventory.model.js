const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    listingPrice: {
        type: Number,
        default: 0
    },
    retailPrice: {
        type: Number,
        default: 0
    },
    totalQuantity: {
        type: Number,
        default: 0
    },
    availableQuantity: {
        type: Number,
        default: 0
    },
    date: {
        type: Date, 
        default: Date.now
    },
})

module.exports = new mongoose.model("inventory", inventorySchema);