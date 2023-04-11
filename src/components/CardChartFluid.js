import React from "react";

const CardChartFluid = ({ name, img, id }) => {
  const queryChart = (e) => {
    window.location.href = `#/chart/details/${id}`;
  };
  return (
    <div onClick={queryChart}>
      <img src={img} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default CardChartFluid;
