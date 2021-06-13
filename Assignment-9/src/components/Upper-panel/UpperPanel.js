
import React from 'react';
import '../Upper-panel/UpperPanel.scss'

class UpperPanel extends React.Component {
    
    // Get Props
    constructor(props){
        super(props);
    };

    
    // Submit ToDo
    submitToDo(event){
        event.preventDefault();
        console.log(this.props);
    
        const temp = async() => {
           
        const result = await fetch('http://localhost:3000/myToDos/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementsByClassName('to-do-title').item(0).value,
            description: document.getElementsByClassName('to-do-desc').item(0).value,
            deadlineDate: (document.getElementsByClassName('to-do-date').item(0).value),
            deadlineTime: document.getElementsByClassName('to-do-time').item(0).value
        })
        });   
            this.props.appMethod(); 
        }
        const checkTitlePresent =  document.getElementsByClassName('to-do-title').item(0).value;
        // Check if title is present and then allow to submit
        if(checkTitlePresent)
                temp();
                
        else
            alert("Title can't be empty");
        
    }

    // Click Handler
    clickHandler(event){
        
        event.preventDefault();
        console.log(this.props);

        let div = document.getElementsByClassName('createForm')[0];

        // Created form 
        let form = document.createElement('form');


        // Created name input
        let name = document.createElement('input');
        name.id = "title-field";
        name.classList.add("to-do-title");
        name.classList.add("styleMe-field");
        name.text = "text";
        name.placeholder = 'Title';
        name.required = true;

        // Created description input
        let desc = document.createElement('input');
        desc.id = "desc-title";
        desc.classList.add("to-do-desc");
        desc.classList.add("styleMe-field");
        desc.type = "text";
        desc.placeholder = 'Description';
        desc.required = true;



        // Created due date input
        let dueDate = document.createElement('input');
        dueDate.classList.add("to-do-date");
        dueDate.classList.add("styleMe-field");
        dueDate.type = 'date';
        dueDate.required = true;

        // Created due time input
        let dueTime = document.createElement('input');
        dueTime.classList.add("to-do-time");
        dueTime.classList.add("styleMe-field");
        dueTime.type = 'time';
        dueTime.required = true;

        // Submit Button
        let submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.innerText =  '➕';
        submitBtn.onclick=this.submitToDo.bind(this);
 

        // Close button
        let closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.innerText =  '✖️';
        closeBtn.addEventListener('click', 
                function(event){
                    event.preventDefault();
                    let div = document.getElementsByClassName('createForm')[0];
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                    }
                    // Hide add to-do button
                    const newToDobtn = document.getElementsByClassName('expand-btn')[0];
                    newToDobtn.hidden = false;
        }); 

       

        // Hide add to-do button
        const newToDobtn = document.getElementsByClassName('expand-btn')[0];
        newToDobtn.hidden = true;
      

        // add all elements in the form
        form.appendChild(name);
        form.appendChild(desc);
        form.appendChild(dueDate);
        form.appendChild(dueTime);
        form.appendChild(submitBtn);
        form.appendChild(closeBtn);
        div.appendChild(form);


    }

    render(){
        return(
            <div className = 'Upper-Div'>
                <button className="expand-btn" onClick={this.clickHandler.bind(this)}>  New To-Do 📝 </button>
                <div className="createForm"></div>
            </div>
        );
    }
}

export default UpperPanel;