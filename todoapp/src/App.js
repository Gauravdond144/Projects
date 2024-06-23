import "./App.css";
import Heading from "./Components/Heading";
import Inputodo from "./Components/Inputodo";
import { useReducer } from "react";
import TodoItems from "./Components/TodoItems";
import MyContext from "./Components/MyContext";

function todoReducer(currentTodo, todoaction) {
  let newTodoItems = currentTodo;
  if (todoaction.type === "ADDTODO") {
    newTodoItems = [
      ...currentTodo,
      {
        itemName: todoaction.payload.itemName,
        itemDate: todoaction.payload.itemDate,
      },
    ];
  } else if (todoaction.type === "DELETETODO") {
    newTodoItems = currentTodo.filter(
      (item) => item.itemName !== todoaction.payload.itemName
    );
  }
  return newTodoItems;
}

function App() {
  const [todoItems, todoItemsdispatcher] = useReducer(todoReducer, []);

  function addTodo(itemName, itemDate) {
    const todoaction = {
      type : "ADDTODO",
      payload: {
        itemName,
        itemDate,
      },
    };
    todoItemsdispatcher(todoaction);
  }
  function deleteTodo(itemName) {
    const todoaction = {
      type : "DELETETODO",
      payload: {
        itemName,
      },
    };
    todoItemsdispatcher(todoaction);
  }

  return (
    <>
      <div className="mainContainer">
        <MyContext.Provider value={{ todoItems, addTodo, deleteTodo }}>
          <Heading></Heading>
          <Inputodo></Inputodo>
          <TodoItems></TodoItems>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
