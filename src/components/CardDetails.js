import React from "react";
import ButtonBack from "./ButtonBack";
import ChartAnime from "./ChartAnime";
import CardFluidChart from "./ChartAnime";
const CardDetails = ({
  title,
  img,
  date,
  duration,
  episodes,
  geners,
  licensors,
  producers,
  season,
  status,
  sypnosis,
  theme,
  type,
  score,
  id,
}) => {
  return (
    <div>
      <ButtonBack />
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <>
        <h3>Aried:</h3>
        <h3>{date}</h3>
      </>
      <>
        <h3>Episodes:</h3>
        <h3>{episodes}</h3>
        <h3>Durantion:</h3>
        <h3>{duration}</h3>
      </>
      <>
        <h3>Geners:</h3>{" "}
        {geners.map((el) => (
          <h3>{el.name}</h3>
        ))}
      </>
      <>
        <h3>Licensors:</h3>{" "}
        {licensors.map((el) => (
          <h3>{el.name}</h3>
        ))}
      </>
      <>
        <h3>Producers:</h3>{" "}
        {producers.map((el) => (
          <h3>{el.name}</h3>
        ))}
      </>
      {!season === null && (
        <>
          <h3>Season:</h3>
          <h3>{season}</h3>
        </>
      )}

      <>
        <h3>Status:</h3>
        <h3>{status}</h3>
      </>
      <>
        <h3>Sypnosis:</h3>
        <h3>{sypnosis}</h3>
      </>
      <>
        <h3>Theme:</h3>
        {theme.map((el) => (
          <h3>{el.name}</h3>
        ))}
      </>
      <>
        <h3>Type:</h3>
        <h3>{type}</h3>
      </>
      <>
        <h3>Score:</h3>
        <h3>{score}</h3>
      </>
      <ChartAnime id={id} />
    </div>
  );
};

export default CardDetails;
