import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

function EditInput({ updateDataHandler }) {
  const { state } = useLocation();
  console.log("STATE", state);
  const [newData, setnewData] = useState(state);
  const navigate = useNavigate();

  return (
    <div>
      <div className="field">
        <input
          value={newData?.name}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setnewData({ ...newData, name: e.target.value });
          }}
        />
        <input
          value={newData?.email}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setnewData({ ...newData, email: e.target.value });
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            updateDataHandler(newData);
            navigate("/");
            console.log(newData);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditInput;
