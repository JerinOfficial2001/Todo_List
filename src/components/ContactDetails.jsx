import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ContactDetails() {
  const { state } = useLocation();

  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="image"></div>
        <div className="ids">
          <div className="name">{state.name}</div>
          <div className="email">{state.email}</div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default ContactDetails;
