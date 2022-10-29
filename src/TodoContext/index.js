import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext =  React.createContext();

function TodoProvider(props) {

    const {
        item : todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1) {
        searchedTodos= todos;
      }else {
        const searchText = searchValue.toLowerCase();
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          return todoText.includes(searchText);
        });
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos)
      };
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        newItem.splice(todoIndex, 1)
        saveTodos(newItem);
      };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );

    }

<TodoContext.Consumer></TodoContext.Consumer>

export {TodoContext, TodoProvider};