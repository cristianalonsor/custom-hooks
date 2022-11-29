import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {

  const initialState = [];
  /**
   * funcion que nos inicializa nuestro reducer,
   * se la debemos pasar como argumento al useReducer
   */
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  //el segundo elemnto de esta desestructuracion de arreglo
  //tiende a llamarse dispatch cuando sólo hay un reducer
  //si hay más de un reducer, se llama "dispatchNombreReducer"
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  //utilizamos el reducer para modificar el array

  const handleNewTodo = (todo) => {
    //creamos la action que envíaremos
    const action = {
      type: "[Todo] Add Todo",
      payload: todo,
    };

    //en el dispatch (es una funcion) es donde envío mi payload hacia el reducer
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[Todo] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[Todo] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length
  };
};
