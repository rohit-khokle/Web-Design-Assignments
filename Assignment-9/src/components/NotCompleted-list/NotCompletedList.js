import React from 'react';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import '../NotCompleted-list/NotCompletedList.scss'

const NotCompletedList = ({ toDos, appMethod }) => {
    
    // Open To-Do List
    function expandMe(i, toDo){
        const div = document.getElementsByClassName('card-'+i)[0];
        
        // Check if already open
        const checkBtn = document.getElementsByClassName('markDoneBtn-'+i)[0];

        if(checkBtn === undefined){ 
            // Create Elements
            const desc = document.createElement('p');
            desc.classList.add('desc-'+i);
            desc.innerText = toDo.description;
            desc.hidden = false;

            // Deadline Date
            let deadlineDt = toDo.deadlineDate;
            deadlineDt = deadlineDt.substring(0,10);
            const p = document.createElement('p');
            p.classList.add('p-'+i);
            p.innerText = deadlineDt;
            p.hidden = false;
            
            
            // Deadline Time
            const tm = document.createElement('p');
            tm.classList.add('tm-'+i);
            tm.innerText = toDo.deadlineTime;
            tm.hidden = false;
            
            // Button to mark done
            const btn = document.createElement('button');
            btn.classList.add('markDoneBtn-'+i);
            btn.classList.add('markDonebtnStyle');
            btn.innerText = '✅';
            btn.hidden = false;
            btn.addEventListener('click',  function(event){
                event.preventDefault();
                markDone(toDo);
                }); 


            // Add to the card
          //  btn.onClick = () => markDone(toDo);
            div.appendChild(desc);
            div.appendChild(p);  
            div.appendChild(tm);
            div.appendChild(btn);
        }
        else {
            const hideBtn = document.getElementsByClassName('markDoneBtn-'+i)[0];
            const desc = document.getElementsByClassName('desc-'+i)[0];
            const p = document.getElementsByClassName('p-'+i)[0];

            const tm = document.getElementsByClassName('tm-'+i)[0];


            if(hideBtn.hidden === true){
                hideBtn.hidden = false;
                desc.hidden  = false;
                p.hidden = false;
                tm.hidden = false;
            }
            else {
                hideBtn.hidden = true;
                desc.hidden  = true;
                p.hidden = true;
                tm.hidden = true;
            }

        }
  
        
    }

    // POST API call 
    function markDone(toDo) {
        toDo.completed = true;
        const temp = async() => {
            const result = await fetch(`http://localhost:3000/myToDos/${toDo.id}`, {
                  method: 'PUT',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  }, 
                  body: JSON.stringify(toDo)
              });
              appMethod();   
          } 
        temp(); 
    }  
        return(
            <div className='notCompletedList'>      
                {toDos.map((toDo, i) => (
                    <div key = {i} className="card-body">
                        <h5 className={`card-${i}`} onClick={() => expandMe(i, toDo)}>{toDo.title}</h5>
                    </div>
                ))}  
            </div>
        );
    };


export default NotCompletedList;