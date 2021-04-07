import express from 'express';
import { Item } from '../models/item.model.js';
const router = express.Router();

router.get('/', function(req, res, next) {
  Item.find().then((items) => {
    console.log('items', items);
    res.send(items);
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body.name);
  const Item = new Item({label: req.body.label, price: req.body.price})
  Item.save().then(itemSaved => {
    res.send(itemSaved)
  })
});


export default router;

