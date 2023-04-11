import React from "react";
import "./Modal.css";

const CardFluid = ({
  id,
  key,
  title,
  image,
  type,
  openModal,
  isOpen,
  getDetails,
  returnId,
  details,
}) => {
  return (
    <div
      id={id}
      onClick={(openModal, returnId, details)}
      className={`${isOpen && "displa-none"}`}
    >
      <div onClick={getDetails}>
        <img id={id} src={image} alt={title} />
        <h2 id={id}>{title}</h2>
        <h3 id={id}>{type}</h3>
      </div>
    </div>
  );
};

export default CardFluid;
