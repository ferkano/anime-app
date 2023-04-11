import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CardChartFluid from "./CardChartFluid";

const ChartAnime = ({ id }) => {
  const [getChart, setGetChart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let api = helpHttp();
  const urlChart = `https://api.jikan.moe/v4/anime/${id}/characters`;

  useEffect(() => {
    setLoading(true);

    api.get(urlChart).then((res) => {
      console.log(res);
      if (!res.err) {
        console.log(res);
        setGetChart(res);
        setError(null);
      } else {
        setGetChart(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {" "}
      {getChart === null ? (
        <h3>cargando...</h3>
      ) : (
        getChart.data.map((el) => (
          <CardChartFluid
            key={el.character.mal_id}
            id={el.character.mal_id}
            name={el.character.name}
            img={el.character.images.jpg.image_url}
          />
        ))
      )}
    </div>
  );
};

export default ChartAnime;
