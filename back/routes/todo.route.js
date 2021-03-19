import express from 'express';
import { Todo } from '../models/todo.model.js';
var router = express.Router();


router.get('/', function(req, res, next) {
  Todo.find().then((todos) => {
    console.log('todos', todos, err);
    res.send(todos);
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body.name);
  const todo = new Todo({name: req.body.name, checked: false})
  todo.save().then(todoSaved => {
    res.send(todoSaved)
  })
});

router.patch('/:id', (req, res, next) => {
  console.log(req.body);
  const id = req.params.id
  Todo.findByIdAndUpdate(id, {checked: req.body.checked}, {
    new: true
  }).then(todoSaved => {
    res.send(todoSaved)
  })
});

router.delete('/:id', (req, res, next) => {
  console.log(req.body);
  const id = req.params.id
  Todo.findByIdAndDelete(id).then(todoSaved => {
    res.send('deleted')
  })
});

export default router;
