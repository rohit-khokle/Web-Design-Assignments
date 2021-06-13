import express from 'express';
import toDoController from './../controllers/todo.controller'

const router = express.Router();

// Handles get and post
router.route('/myToDos')
    .get(toDoController.index)
    .post(toDoController.save);

// Handles get, put and delete
router.route('/myToDos/:id')
    .get(toDoController.get)
    .put(toDoController.update)
    .delete(toDoController.remove);

router.route('/myToDos/completed')
    .get(toDoController.getListOnStatus)





export default router;
 