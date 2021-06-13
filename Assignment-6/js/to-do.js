
// Reading json file async way

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data/to-do-data.json');
xhr.onload = (response) => {
    if(response.currentTarget.status === 200){
        const myToDos = JSON.parse(response.currentTarget.responseText);
        createList(myToDos);
    }
}
xhr.send();


// Read all items, seggregate list according the the status
const createList = (myToDos) => {
    const completedList = document.createElement('div');

    const openList = document.createElement('div');
    

    myToDos.forEach(myToDo => {
        if(myToDo.status === 'OPEN')
        {
            addToOpen(myToDo);    
        }
        else if(myToDo.status === 'DONE')
        {
            addToDone(myToDo);
        }
    });
}


// Completed List 
const addToDone = (myToDo) => {
    const container = document.getElementsByClassName('completedList').item(0);
    let listItem = document.createElement('div');
          
        
    listItem.classList.add('div-card-complete');
    listItem.id = `item-${myToDo.id}`;
    listItem.textContent = myToDo.title;
    listItem.setAttribute('MyToDoTitle', myToDo.title);
    listItem.setAttribute('MyToDoId', myToDo.id);
    listItem.setAttribute('MyToDoDesc', myToDo.description);
    listItem.setAttribute('MyToDoTime', myToDo.time);
    listItem.setAttribute('MyToDoDate', myToDo.date);
    listItem.setAttribute('MyToDoStatus',  myToDo.status);
    listItem.addEventListener('click', itemListenerNoComplete);
   
    container.appendChild(listItem); 
}


// Open List
const addToOpen = (myToDo) => {
        const container = document.getElementsByClassName('notCompletedList').item(0);
        let listItem = document.createElement('div');
          
        
            listItem.classList.add('div-card-notcomplete');
            listItem.id = `item-${myToDo.id}`;
            listItem.textContent = myToDo.title;
            listItem.setAttribute('MyToDoTitle', myToDo.title);
            listItem.setAttribute('MyToDoId', myToDo.id);
            listItem.setAttribute('MyToDoDesc', myToDo.description);
            listItem.setAttribute('MyToDoTime', myToDo.time);
            listItem.setAttribute('MyToDoDate', myToDo.date);
            listItem.setAttribute('MyToDoStatus',  myToDo.status);
            listItem.addEventListener('click', itemListenerNoComplete);
         
            container.appendChild(listItem); 
}

// Adding new item in Open List
const addNewToDo = (event) => {

    // Get Field content
    const title = document.getElementsByClassName('title').item(0).value ;
    const desc = document.getElementsByClassName('desc').item(0).value;
    const toDoDate = document.getElementsByClassName('date').item(0).value;
    const toDoTime = document.getElementsByClassName('time').item(0).value;
   
    // Validate the inputs
    if(title == ""){
        alert("Please enter valid inputs");
    }
    if(desc == ""){
        alert("Please enter valid inputs");
    }
    if(toDoDate == ""){
        alert("Please enter valid inputs");
       
    }
    if(toDoTime == ""){
        alert("Please enter valid inputs");
    }


    // If valid, add item in the list
    else {
        const container = document.getElementsByClassName('notCompletedList').item(0);     
        const lasDiv = container.lastChild;
        let id = 0;
        try {
            id = lasDiv.getAttribute('MyToDoId');
            id++;
        }
        catch{
        
            id++;
        }
        
        const myToDo = new MyToDo(id, title, desc, toDoDate, toDoTime, 'OPEN');

        let listItem = document.createElement('div');
        listItem.classList.add('div-card-notcomplete');
        listItem.id = `item-${myToDo.id}`;
        listItem.textContent = myToDo.title;
        listItem.setAttribute('MyToDoTitle', myToDo.title);
        listItem.setAttribute('MyToDoId', myToDo.id);
        listItem.setAttribute('MyToDoDesc', myToDo.desc);
        listItem.setAttribute('MyToDoTime', myToDo.toDoTime);
        listItem.setAttribute('MyToDoDate', myToDo.toDoDate);
        listItem.setAttribute('MyToDoStatus', myToDo.status);
        listItem.addEventListener('click', itemListenerNoComplete);
        container.appendChild(listItem); 
    }        
}

class MyToDo {
    constructor(id, title, desc, toDoDate, toDoTime, status) {
        this.id = id;
        this.title = title;
        this.desc  = desc;
        this.toDoDate = toDoDate;
        this.toDoTime = toDoTime;
        this.status  = status;
    }
}

const itemListenerNoComplete = (event) => {
    // get current div
    const currentNode = event.currentTarget;
    // Check if div present 
    const id = currentNode.getAttribute('MyToDoId');
    const getDiv = document.getElementsByClassName(`description-div-${id}`).item(0);
    if(getDiv == null){


        // Create a New Div
        const newDiv = document.createElement('div');
        const id = currentNode.getAttribute('MyToDoId');
        newDiv.classList.add(`description-div-${id}`);      

        // Create a paragraph 
        const para = document.createElement('p');
        let myToDoItem = currentNode.getAttribute('MyToDoDesc');
        para.textContent = myToDoItem;  
        newDiv.appendChild(para);


        // Same for time and data

        const paraDate = document.createElement('p');
        let myToDoDate = currentNode.getAttribute('MyToDoDate');   
        paraDate.textContent = myToDoDate;  
        newDiv.appendChild(paraDate);

        const paraTime = document.createElement('p');
        let myToDoTime = currentNode.getAttribute('MyToDoTime');
        paraTime.textContent = myToDoTime;  
        newDiv.appendChild(paraTime);


        // Add complete button
        let status = currentNode.getAttribute('MyToDoStatus');
        if(status == "OPEN"){
                let span = document.createElement('span');
                span.innerText = "✔";
                span.classList.add('completed-check');
                span.onclick = function(){

                    // Update the status of the item
                    currentNode.setAttribute('MyToDoStatus', 'DONE');
                   
                    // Remove the div card
                    const container = document.getElementsByClassName('notCompletedList').item(0); 
                    container.removeChild(currentNode);
                    
                    // Add the card in the completed list
                    addToCompleteList(currentNode);
                
                }
                newDiv.appendChild(span);
        }
        
        currentNode.appendChild(newDiv);
    }

}


// Add To-Do to complete
const addToCompleteList = (currentNode) => {
    const container = document.getElementsByClassName('completedList').item(0);
    
    // Get the last id and increment it for the new id
    // Set attributes in the variables
    let id = container.lastChild.getAttribute('MyToDoId');
    id++;
    let title =   currentNode.getAttribute('MyToDoTitle');
    let desc  = currentNode.getAttribute('MyToDoDesc');
    let toDoDate = currentNode.getAttribute('MyToDoDate');
    let toDoTime = currentNode.getAttribute('MyToDoTime');

    const myToDo = new MyToDo(id, title, desc, toDoDate, toDoTime, 'DONE');


    // Add the ToDo to new div element
    let listItem = document.createElement('div');
    listItem.classList.add('div-card-complete');
    listItem.id = `item-${myToDo.id}`;
    listItem.textContent = myToDo.title;
    listItem.setAttribute('MyToDoTitle', myToDo.title);
    listItem.setAttribute('MyToDoId', myToDo.id);
    listItem.setAttribute('MyToDoDesc', myToDo.desc);
    listItem.setAttribute('MyToDoTime', myToDo.toDoTime);
    listItem.setAttribute('MyToDoDate', myToDo.toDoDate);
    listItem.setAttribute('MyToDoStatus', myToDo.status);
    listItem.addEventListener('click', itemListenerNoComplete);


    // Attach it to the list
    container.appendChild(listItem); 

}

const addFields = (event) => {
   const container = document.getElementsByClassName('addFieldsDiv').item(0);
   // check if the container is already open
   const check =  document.getElementsByClassName('title').item(0); 
   
   if(check == null){
            const title = document.createElement('input');
            const desc = document.createElement('input');
            const date = document.createElement('input');
            const time = document.createElement('input');
            const btn = document.createElement('button');
            const close = document.createElement('button');
            // Create Element fields...
            title.type = "text";
            title.placeholder = "Title";
            title.classList.add("field");
            title.classList.add("title");

            desc.type = "text";
            desc.placeholder = "Description";
            desc.classList.add("field");
            desc.classList.add("desc");

            date.type = "date";
            date.classList.add("field");
            date.classList.add("date");

            time.type = "time";
            time.classList.add("field");
            time.classList.add("time"); 

            btn.textContent = "➕";
            btn.classList.add("button-save");
            btn.classList.add("field");
            btn.onclick = addNewToDo;



            container.appendChild(title);   
            container.appendChild(desc);
            container.appendChild(date);
            container.appendChild(time);
            container.appendChild(btn);
    }
}

