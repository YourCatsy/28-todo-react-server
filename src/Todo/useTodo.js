import React from 'react';
import TodoApi from "../TodoApi";


function useTodo(defaultList) {
  const [list, setList] = React.useState(defaultList);

  React.useEffect(() => {
    TodoApi.getList().then((res) => {
      setList(res);
    });
  }, []);

  function addTodo(message) {
    const todo = { title: message, status: false };

    TodoApi.create(todo).then((newTodo) => {
      setList([...list, newTodo]);
    });
  }

  function deleteTodo(id) {
    TodoApi.delete(id).then((newTodo) => {
      const newList = list.filter(todo => todo.id !== id);
      setList(newList);
    });
  }

  function changeStatus(id) {
    const currentTodo = list.find(todo => todo.id === id);
    const updatedTodo = {
      ...currentTodo,
      status: !currentTodo.status,
    };

    TodoApi.update(id, updatedTodo).then((newTodo) => {
      const newList = list.map(todo => todo.id === id ? updatedTodo : todo);
      setList(newList);
    });
  }

  return {
    list,
    addTodo,
    deleteTodo,
    changeStatus,
  
  };
}

export default useTodo;
