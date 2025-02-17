import React from "react";
import classnames from "classnames/bind";

import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

import todoStyles from "./Todo.scss";

const classNames = require("classnames");

const cns = classnames.bind(todoStyles);

export default function Todo({
  title,
  handleCompleteTodo,
  handleEdit,
  handleRemove,
  completed,
  id,
}) {
  const checkedClass = classNames("roundedLabel", { checked: completed });
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between p-2 todo border-bottom border-top-0 border-left-0 border-right-0">
      <span>
        <label htmlFor={id} className={checkedClass}>
          <input
            type="checkbox"
            className="roundedCheckbox"
            id={id}
            onChange={handleCompleteTodo}
            checked={completed}
          />
        </label>
        <p className={cns({ completed: completed })}>{title}</p>
      </span>

      <div className="todoRight">
        <button type="button" className="btn editBtn" onClick={handleEdit}>
          <EditIcon />
        </button>
        <button type="button" className="btn removeBtn" onClick={handleRemove}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
}
