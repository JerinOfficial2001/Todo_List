import React from "react";
import * as Icon from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Card({ data, clickHandler }) {
  const navigate = useNavigate();
  const { id, name, email } = data;
  return (
    <div className="items">
      <div
        className="contents"
        onClick={() => {
          navigate(`data/${id}`, { state: { ...data } });
        }}
      >
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <div className="icons">
        <Icon.AiOutlineEdit
          onClick={() => {
            navigate("/edit", {
              state: { ...data },
            });
          }}
        />
        <Icon.AiFillDelete onClick={() => clickHandler(id)} />
      </div>
    </div>
  );
}

export default Card;
