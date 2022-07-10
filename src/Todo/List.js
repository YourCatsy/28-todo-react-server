import React from 'react';

import style from "./List.css";


function List({ list, onDelete, onStatusChange, onEdit }) {
  return (
    <ul id="todoList">
      {list.map(todo => (
        <li
          key={todo.id}
          className={todo.status ? style.done : ''}
          onClick={() => onStatusChange(todo.id)}
        >
          {todo.title}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <button onClick={() => onEdit(todo)}>Edit</button>
        </li>
      ))}
    </ul>
  )
}

export default List;
