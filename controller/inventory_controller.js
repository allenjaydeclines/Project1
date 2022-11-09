const Invent = require('../models/inventory.model');

const addSupply = (req, res)  => {
    const { itemName, listingPrice,  retailPrice, totalQuantity, availableQuantity} = req.body;
    const invent = new Invent({
        itemName: itemName,
        listingPrice: listingPrice,
        retailPrice: retailPrice,
        totalQuantity: totalQuantity,
        availableQuantity: availableQuantity
    })
    invent.save();
    console.log(invent)
    res.redirect('/inventory/addsupply');
}

const inventoryDelete = async(req, res) => {
    const {_id} = req.params
    await Invent.deleteOne({_id});
    console.log("deleted successfully!")
    res.redirect('/inventory');
}

module.exports = { addSupply, inventoryDelete };