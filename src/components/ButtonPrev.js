import React from "react";

const ButtonPrev = ({ task }) => {
  return (
    <div>
      <input type="button" name="prev" value="prev" onClick={task} />
    </div>
  );
};

export default ButtonPrev;
