import TodoItem from "./TodoItem";
import MyContext from "./MyContext";
import { useContext } from "react";
function TodoItems({ deleteTodo }) {
  const context = useContext(MyContext);
  return (
    <>
      {context.todoItems.map((item) => (
        <TodoItem
          name={item.itemName}
          key={item}
          date={item.itemDate}
          deleteTodo={context.deleteTodo}
        ></TodoItem>
      ))}
    </>
  );
}
export default TodoItems;
