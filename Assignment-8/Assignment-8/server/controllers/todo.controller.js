import todoService from './../services/todo.service';
import toDoService from './../services/todo.service';

// Controller layer, handling the requests



// Get all ToDos
const index = (req, res) => {
    const promise =  toDoService.search();
    promise.then((mytodos) => {
        res.status(200);
        res.json(mytodos);
    })
}


// Save a new ToDo
const save = (req, res) => {

    const mytodo = {...req.body};

    const promise =  toDoService.save(mytodo);
    promise.then((mytodos) => {
        res.status(200);
        res.json(mytodo); 
    })
}


// Get a ToDo with specified id
const get = (req, res) => {
    // get the id from params
    const id = req.params.id;
    const promise =  toDoService.get(id);
    promise.then((mytodo) => {
        res.status(200);
        res.json(mytodo); 
    })
}


// Update a todo with specified id
const update = (req, res) => {
  // get the id from params
    const id = req.params.id;

    // getting the update body  
    const mytodo = {...req.body};
    const promise = todoService.update(id, mytodo);

    promise.then((mytodos) => {
        res.status(200);
        res.json(mytodos); 
    })

}

// remove a todo with specified
const remove = (req,res) => {
    // get the id from params
    const id = req.params.id;
    const promise = todoService.remove(id);

    promise.then(() => {
        res.status(200);
        res.json({"message": "Deleted!"}); 
    })
}


// get completed 

const getListOnStatus = (req, res) => {
    const promise =  toDoService.getListOnStatus();
    promise.then((mytodo) => {
        res.status(200);
        res.json(mytodo); 
    })
}




// export all functions
export default {
    index: index,
    save: save,
    get: get,
    update:update,
    remove:remove,
    getListOnStatus:getListOnStatus
}