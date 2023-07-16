import logo from './logo.svg';
import './App.css';
import React,{ Component }  from 'react';
import { useState } from "react";
import TodoInput from './todoInput';
import TodoList from './todoList';



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }
  return (
    <div className='App'>
      <h1>React Todo App</h1>

      <div className='input-wrapper'>
        <input 
        type="text" 
        name="todo"
        value={todo}
        placeholder='Create a new todo'
        onChange={(e) => {
          setTodo(e.target.value);
        }} 
        />
        
        <button className='add-button' onClick={addTodo}>Add</button>

      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <label for="checktodo" key={index} > {todo} </label>
              <input id='checktodo' type="checkbox" name="checktodo"/>
              <button
              className="delete-button"
              onClick={() => {deleteTodo(todo);}}
              >Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
};

export default App;
