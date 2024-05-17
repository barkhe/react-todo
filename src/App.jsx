import { useState } from 'react';
import './App.css';
import TodoCount from './TodoCount';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const init = [
  {
    id: 1,
    text: '리액트 공부하기',
    done: false,
  },
  {
    id: 2,
    text: '백엔드 공부하기',
    done: false,
  },
  {
    id: 3,
    text: '코딩테스트 공부하기',
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
