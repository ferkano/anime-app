import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import { helpHttp } from "../helpers/helpHttp";

const DetailsAnime = ({ title, closeModal, isOpen, form, img }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [getAnime, setGetAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  let api = helpHttp();
  const urlId = `https://api.jikan.moe/v4/anime/${id}`;

  useEffect(() => {
    setLoading(true);
    api.get(urlId).then((res) => {
      //console.log(res);
      if (!res.err) {
        setGetAnime(res);
        setError(null);
      } else {
        setGetAnime(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [urlId]);

  return (
    <div onClick={handleModalContainerClick}>
      {getAnime === null ? (
        <h3>cargando...</h3>
      ) : (
        <CardDetails
          title={getAnime.data.title}
          img={getAnime.data.images.jpg.image_url}
          date={getAnime.data.aired.string}
          episodes={getAnime.data.episodes}
          duration={getAnime.data.duration}
          //genero = array
          geners={getAnime.data.genres}
          licensors={getAnime.data.licensors}
          producers={getAnime.data.producers}
          season={getAnime.data.season}
          status={getAnime.data.status}
          sypnosis={getAnime.data.synopsis}
          theme={getAnime.data.themes}
          type={getAnime.data.type}
          score={getAnime.data.score}
          id={id}
        />
      )}
    </div>
  );
};

export default DetailsAnime;
