import React from "react";
import ButtonBack from "./ButtonBack";

const CardChartDetails = ({ name, img, about }) => {
  return (
    <div>
      <ButtonBack />
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h3>{about}</h3>
    </div>
  );
};

export default CardChartDetails;
