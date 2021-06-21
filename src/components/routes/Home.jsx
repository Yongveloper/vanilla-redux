import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../store';
import ToDo from '../ToDo';

const Home = () => {
  const [text, setText] = useState('');

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(add(text));
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
