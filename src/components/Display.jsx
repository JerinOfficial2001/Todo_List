import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Display({ datas, deletedata }) {
  const navigate = useNavigate();
  const deleteDataHandler = (id) => {
    deletedata(id);
  };

  return (
    <div className="display">
      <div className="top-bar">
        <h2>Contact List</h2>
        <button
          type="submit"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Contacts
        </button>
      </div>

      {datas?.map((data) => {
        return <Card data={data} clickHandler={deleteDataHandler} />;
      })}
    </div>
  );
}

export default Display;
