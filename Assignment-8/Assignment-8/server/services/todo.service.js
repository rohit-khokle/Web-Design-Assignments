import ToDo from './../models/todo';


// Search Service, gets full list of the todos
const search = (params) => {
    const promise = ToDo.find(params).exec();
    return promise;
}


// Save new todo
const save = (mytodo) => {
    const todo =  new ToDo(mytodo);
    const promise = todo.save();
    return promise;
}

// Get a todo for given id
const get = (id) => {
    // Exec() function converts it into promise
    const promise = ToDo.findById(id).exec();
    return promise;
}

// get completed
const getListOnStatus = (params) => {
    const query = ToDo.where({ completed: true});
    const promise = query.find(params).exec();
    return promise;
}




// Update todo with given id
const update = (id, updatedToDo) => {
    // Exec() function converts it into promise
    updatedToDo.lastModifiedDate = new Date();
    const promise = ToDo.findOneAndUpdate({_id:id},
        updatedToDo, 
        { new: true }
    ).exec(); //   ById(id).exec();
    return promise;
}

// Remove todo with specified id
const remove = (id) => {
    // Exec() function converts it into promise
    const promise = ToDo.findByIdAndRemove({_id:id}).exec(); //   ById(id).exec();
    return promise;
}

// export all functions
export default {
    search: search,
    save: save,
    get: get,
    update: update,
    remove: remove,
    getListOnStatus:getListOnStatus
   
}



