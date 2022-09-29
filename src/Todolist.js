import React, { useState } from "react";

 export default function Todolist() {
  
    const [todo, setTodo] = useState({ desc: "", date: "" });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
      setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    };

    const deleteToDo = (row) => {
      setTodos(todos.filter((todo, index) => row !== index))
    }

    return (
      <div className="App">
        <form onSubmit={addTodo}>
          <input
            type="date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />
          <input
            type="text"
            name="desc"
            value={todo.desc}
            onChange={inputChanged}
          />
          <input type="submit" value="Add" />
        </form>

        <table>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td><button onClick={()=>deleteToDo(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


