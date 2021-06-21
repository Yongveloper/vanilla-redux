import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ toDo }) => {
  return (
    <>
      <h1>{toDo.text}</h1>
      <h1>Created at: {toDo.id}</h1>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === Number(id)) };
};

export default connect(mapStateToProps)(Detail);
