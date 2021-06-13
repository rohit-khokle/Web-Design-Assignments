import React from 'react';
import '../Completed-list/CompletedList.scss';

const CompletedList = ({ toDos, appMethod }) =>  {

   // Open To-Do List
   function expandMe(i, toDo){
    const div = document.getElementsByClassName('title-completed-card-'+i)[0];
    
    // Check if already open
    const checkDesc = document.getElementsByClassName('completed-desc-'+i)[0];
        
    // check if opened once
    if(checkDesc === undefined){ 
        // Create Elements
        const desc = document.createElement('p');
        desc.classList.add('completed-desc-'+i);
        desc.innerText = toDo.description;
        desc.hidden = false;


        // Deadline Date
        let deadlineDt = toDo.deadlineDate;
        deadlineDt = deadlineDt.substring(0,10);
        const p = document.createElement('p');
        p.classList.add('completed-p-'+i);
        p.innerText = deadlineDt;
        p.hidden = false;
        
        // Date
        const tm = document.createElement('p');
        tm.classList.add('completed-tm-'+i);
        tm.innerText = toDo.deadlineTime;
        tm.hidden = false;

        // Add to the card
      //  btn.onClick = () => markDone(toDo);
        div.appendChild(desc);
        div.appendChild(p);
        div.appendChild(tm);
    }
    else {


        const desc = document.getElementsByClassName('completed-desc-'+i)[0];
        const p = document.getElementsByClassName('completed-p-'+i)[0];
        const tm = document.getElementsByClassName('completed-tm-'+i)[0];
        
        // Check if opened before
        if(desc.hidden === true){
            desc.hidden  = false;
            p.hidden = false;
            tm.hidden = false;
        }
        else {
            desc.hidden  = true;
            p.hidden = true;
            tm.hidden = true;
        }

    }

    
}
        return(
            <div className='completed-list-div'>
             
                {toDos.map((toDo , i) => (
                    <div key = {i}  className="card">
                    <div className="card-body-completed">
                        <h5 className={`title-completed-card-${i}`}  onClick={() => expandMe(i, toDo)}>{toDo.title}</h5>
                    </div>
                    </div>
                ))}
               
             </div>
        );
    };


export default CompletedList;