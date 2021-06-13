
import React from 'react';
import './App.scss';
import CompletedList from './Completed-list/CompletedList';
import NotCompletedList from './NotCompleted-list/NotCompletedList';
import UpperPanel from './Upper-panel/UpperPanel'




class App extends React.Component {
  constructor(props) {
    super(props);
    };
  state = {
    toDos: [],
    completed:[],
    notCompleted:[]
  }

  // GET call at load
  componentDidMount() {
    fetch('http://localhost:3000/myToDos/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ toDos: data });
      this.setState({ completed: data.filter(mytodo => mytodo.completed === true)})
      this.setState({ notCompleted: data.filter(mytodo => mytodo.completed === false)})
    })
    .catch(console.log);
  
  }

  // Refresh Panels function
  refreshList() {
   
    fetch('http://localhost:3000/myToDos/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ toDos: data });
      this.setState({ completed: data.filter(mytodo => mytodo.completed === true)})
      this.setState({ notCompleted: data.filter(mytodo => mytodo.completed === false)})
    })
    .catch(console.log);
  
  }


 // Consturctor ==> render ==> comp
 
  render(){
    return (
      <div className="App">
        <UpperPanel appMethod={this.refreshList.bind(this)}  />
        <div className='all-list'>
          <NotCompletedList toDos = {this.state.notCompleted}  appMethod={this.refreshList.bind(this)}  />
          <CompletedList toDos = {this.state.completed}  appMethod={this.refreshList.bind(this)} />
        </div>



      </div>
    );
  }
}

export default App;
