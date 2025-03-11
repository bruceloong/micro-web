import React, { useState } from "react";
import "./index.css";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
    </div>
  );
};

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="添加新任务..."
      />
      <button type="submit">添加</button>
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "学习React", completed: false },
    { id: 2, text: "学习微前端", completed: true },
    { id: 3, text: "完成项目", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="react-container">
      <h2>React 待办事项应用</h2>
      <p>这是一个使用React构建的简单待办事项应用，作为微前端架构的一部分。</p>

      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
