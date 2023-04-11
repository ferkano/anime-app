import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardChartDetails from "../components/CardChartDetails";
import { helpHttp } from "../helpers/helpHttp";

const ChartDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [getDetailsChart, setGetDetailsChart] = useState(null);

  let api = helpHttp();
  const urlChart = `https://api.jikan.moe/v4/characters/${id}/full`;

  useEffect(() => {
    setLoading(true);
    api.get(urlChart).then((res) => {
      //console.log(res);
      if (!res.err) {
        setGetDetailsChart(res);
        setError(null);
        console.log(res);
      } else {
        setGetDetailsChart(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {getDetailsChart === null ? (
        <h3>cargando...</h3>
      ) : (
        <CardChartDetails
          name={getDetailsChart.data.name}
          img={getDetailsChart.data.images.jpg.image_url}
          about={getDetailsChart.data.about}
        />
      )}
    </div>
  );
};

export default ChartDetails;
