import React from "react";

const ButtonNext = ({ task }) => {
  return (
    <div>
      <input type="button" name="prev" value="next" onClick={task} />
    </div>
  );
};

export default ButtonNext;
