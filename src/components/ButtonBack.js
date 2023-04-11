import React from "react";
import { useNavigate } from "react-router";

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <input
        type="button"
        onClick={goBack}
        name="volver atrás"
        value="volver atrás"
      ></input>
    </div>
  );
};

export default ButtonBack;
