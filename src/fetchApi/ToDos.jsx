import React, { useEffect, useState } from "react";
import axios from "axios";

function ToDos() {
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data.slice(0, 10)); //limiting to 10 todos
        // console.log(response.data);
      } catch (error) {
        setError("Error fetching todos........");
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos(); //call the async function
  }, []);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError("Error deleting todo........");
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <h1>ToDo using useEffect async</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ToDos;
