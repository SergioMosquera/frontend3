import React, { useState } from 'react';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Home from "./pages/Home";
import Sitev from "./pages/Sitev";
import {nanoid} from 'nanoid';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom';


function App(props, task) {
  
    
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
    
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = task.map(task =>{
      if (id === task.id){
        return {...task, completed: !task.completed}      
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id){
    const remainingTask = tasks.filter(task => id !== task.id);
    setTasks(remainingTask);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id){
        return{...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }
    
    const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
     id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      />
   ));
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
    ));
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;
    return (
      <Router>  
        <Switch> 
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/lcrud'>
          <div className="todoapp stack-large">
          <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
              {taskList}
            </ul>
            </div>
          </Route>
          <Route path='/sverification'>
            <Sitev></Sitev>
          </Route>
         
        </Switch>
      
      
      </Router>
    );
  }
  
   export default App;