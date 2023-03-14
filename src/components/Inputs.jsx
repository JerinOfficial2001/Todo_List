import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Inputs({ addInputHandler }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const onSubmitHandler = () => {
    if (data.name === "" && data.email === "") {
      alert("All fields are manditory");
    } else {
      addInputHandler(data);
      setData({
        name: "",
        email: "",
      });
    }
  };
  return (
    <div>
      <div className="field">
        <input
          value={data.name}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <input
          value={data.email}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            onSubmitHandler(e);
            e.preventDefault();
            navigate("/");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Inputs;
