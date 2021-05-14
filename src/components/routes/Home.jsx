import React, { useState } from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
