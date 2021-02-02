import React from 'react'

const List = () => (
<div className="todoapp stack-large">
        <Form addTask={addTask}/>
        <div className="filters btn-group stack-exception">
         <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>
      
)
export default List;