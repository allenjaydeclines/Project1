const express = require('express');
const router = express.Router();
const Invent = require('../models/inventory.model');

const { addSupply, inventoryDelete } = require('../controller/inventory_controller')

router.route('/addsupply').post(addSupply);
router.route('/delete/:_id').get(inventoryDelete);

module.exports = router;