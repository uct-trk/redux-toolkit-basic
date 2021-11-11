import { Checkbox } from "@material-ui/core";
import * as React from "react";
import "./todoitem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        onChange={handleCheck}
        checked={done}
        color="primary"
        {...label}
        defaultChecked
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
