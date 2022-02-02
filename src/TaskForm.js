import React, {useState,useEffect} from 'react';
import './TaskForm.css';

function TaskForm() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const addTask = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const deleteTask = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveData(newTodos);
  };

  return(
    <div className="task-form">
      <form>
        <input type="text" className="input" value={newTodo} placeholder="Enter your task... " onChange={e => setNewTodo(e.target.value)}/>
        <input type="submit" value="Add" className="button" onClick={addTask}/>
      </form>
      {/*// lists*/}
      <div className="tasks">
        <ul>
          {todos.map((todo) =>
            <li key={todo.id}>
              {todo.todo}
              <div className="deletebtn" onClick={() => deleteTask(todo.id)}>🗑️</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}


export default TaskForm;
