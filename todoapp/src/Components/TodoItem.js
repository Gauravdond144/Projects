import styles from "./TodoItem.module.css";
import MyContext from "./MyContext";
import { useContext } from "react";
function TodoItem({ name, date }) {
  const context = useContext(MyContext);
  return (
    <div className={styles.todoitem}>
      <span>{name}</span>
      <span>{date}</span>
      <button onClick={() => context.deleteTodo(name)}>delete</button>
    </div>
  );
}
export default TodoItem;
