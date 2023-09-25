import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNewTodo } from './redux/actions';

function TodoListForm() {
    const [todos, setTodos] = useState([]);

    const dispatch = useDispatch()
    
    const onInputChange = useCallback((e) => {
      console.log(e.target.value)
      setTodos(e.target.value)
    })

    const addTodo = (e) => {
      e.preventDefault()
      dispatch(addNewTodo(todos,false))
      setTodos("")
    }    
    
  return (
    <div>
      <form className="form" onSubmit={addTodo}>
        <input
        placeholder="Enter new todo..."
        className="input"
        value={todos}
        onChange={onInputChange}
        />
      </form>

      <button onClick={addTodo}>AddTask</button>
    </div>
  )
}

export default TodoListForm


