import { useState } from "react";
import "./app.css";
import TodoItem from "./components/TodoItem/TodoItem";

const App = () => {
  const tods: Array<{ title: string; done: boolean ;coment:string}> = [
    { title: "Wash Utensils", done: false ,coment:"Very hectic"},
    { title: "Do homework", done: true,coment:"Some were complicated" },
    { title: "Work out", done: true,coment:"Alot of fun" },
  ];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Array<{ title: string; done: boolean ;coment:string}>>([
    ...tods,
  ]);

  return (
    <div className="main">
      <h1>My todos</h1>

      <div>
        <h2>Add todo</h2>
        <form>
          <div>
            <label htmlFor="title" style={{ display: "block" }}>
              Title
            </label>
            <input
              type="text"
              value={todo}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <button onClick={(e) => {}}>Add todo</button>
          </div>
        </form>
      </div>
      <table>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>state</th>
          <th>Comments</th>
        </tr>

        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            number={index}
            name={todo.title}
            done={todo.done}
            coment={todo.coment}
          />
        ))}
      </table>
    </div>
  );
};

export default App;
