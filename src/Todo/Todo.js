import React from 'react';

import Form from './Form';
import List from './List';
import useTodo from './useTodo';


function Todo({ defaultMessage, defaultList }) {
  const {
    list,
    addTodo,
    deleteTodo,
    changeStatus,
  } = useTodo(defaultList);

  return (
    <>
      <List
        list={list}
        onDelete={deleteTodo}
        onStatusChange={changeStatus}
        onEdit={editTodo}
      />

      <Form
        defaultMessage={defaultMessage}
        onSubmit={message => addTodo(message)}
      />
    </>
  );
}

export default Todo;
