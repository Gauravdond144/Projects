import { useContext, useRef } from "react";
import MyContext from "./MyContext";

function Inputodo({ func }) {
  const context = useContext(MyContext);
  let todoinputDate = useRef();
  let todoinputName = useRef();
  function handleclick() {
    let todoName = todoinputName.current.value;
    let todoDate = todoinputDate.current.value;
    context.addTodo(todoName, todoDate);
    todoinputName.current.value = "";
    todoinputDate.current.value = "";
  }
  return (
    <div>
      <input
        ref={todoinputName}
        type="text"
        id="todoInput"
        placeholder="Enter Todo Here"
      ></input>
      <input ref={todoinputDate} type="date" id="dateInput"></input>
      <button onClick={handleclick} className="add-button">
        Add
      </button>
    </div>
  );
}
export default Inputodo;
