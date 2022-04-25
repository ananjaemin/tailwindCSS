import React from "react";
import { connect } from "react-redux";
import { remove } from "../pages/store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <div className="w-full h-auto bg-slate-200 flex flex-row justify-between p-1 rounded-2xl mb-2">
      <Link to={`/${id}`}>{text}</Link>
      <button className="ml-2 font-bold" onClick={onBtnClick}>DEL</button>
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);