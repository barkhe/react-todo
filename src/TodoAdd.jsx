import { useState } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');

  const EnterAdd = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  function handleAdd() {
    if (txt != '') {
      const addTodos = {
        id: todos.length + 1,
        text: txt,
        done: false,
      };
      setTodos([...todos, addTodos]);
      setTxt('');
    }
  }

  return (
    <div className={styles.todo_add}>
      <input
        onKeyDown={EnterAdd}
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
