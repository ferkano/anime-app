import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonNext from "../components/ButtonNext";
import ButtonPrev from "../components/ButtonPrev";
import CardFluid from "../components/CardFluid";
import Filters from "../components/Filters/Filters";
import useFetch from "../hooks/useFetch";
import { useModal } from "../hooks/useModal";

const initialForm = {
  anime: "",
};
const Anime = () => {
  const [form, setForm] = useState(initialForm);
  const [animes, setAnimes] = useState(null);
  const [id, setId] = useState(null);
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");
  const { page, nameanime, chart } = useParams();

  const navigate = useNavigate();

  let pages;
  if (page === undefined) {
    pages = "";
  } else {
    pages = page;
  }

  let queryAnime;
  let queryChart;
  if (nameanime === undefined) {
    queryAnime = "";
  } else {
    queryAnime = nameanime;
  }

  if (chart === undefined) {
    queryChart = "";
  } else {
    queryChart = chart;
  }
  console.log(queryAnime);

  let url;
  let handleKeyPress;
  let getDetails;
  let nextPage;
  let prevPage;

  let isChart;
  console.log(window.location.hash.substr(2, 5));
  if (window.location.hash.substr(2, 5) === "anime") {
    url = `https://api.jikan.moe/v4/anime?page=${pages}&q=${queryAnime}&type=${type}&status=${status}&rating=${rating}`;

    isChart = false;
    console.log(isChart);

    handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });

        const name = e.target.value.replaceAll(" ", "-");
        window.location.href = `#/anime/queryanime/${name}`;
      }
    };

    getDetails = (e) => {
      setId(e.target.id);
      window.location.href = `#/anime/getanime/${e.target.id}`;
    };
    if (queryAnime === "") {
      nextPage = (e) => {
        window.location.href = `#/anime/page/${currentPage + 1}`;
      };

      prevPage = (e) => {
        window.location.href = `#/anime/page/${currentPage - 1}`;
      };
    } else {
      nextPage = (e) => {
        window.location.href = `#/anime/queryanime/${nameanime}/page/${
          currentPage + 1
        }`;
      };

      prevPage = (e) => {
        window.location.href = `#/anime/queryanime/${nameanime}/page/${
          currentPage - 1
        }`;
      };
    }
  } else {
    url = `https://api.jikan.moe/v4/characters?q=${queryChart}&page=${pages}&type=${type}&status=${status}&rating=${rating}`;

    isChart = true;
    console.log(isChart);

    handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });

        const name = e.target.value.replaceAll(" ", "-");
        window.location.href = `#/characters/querychart/${name}`;
      }
    };
    getDetails = (e) => {
      window.location.href = `#/chart/details/${e.target.id}`;
    };

    if (queryChart === "") {
      nextPage = (e) => {
        window.location.href = `#/characters/page/${currentPage + 1}`;
      };

      prevPage = (e) => {
        window.location.href = `#/characters/page/${currentPage - 1}`;
      };
    } else {
      nextPage = (e) => {
        window.location.href = `#/characters/querychart/${chart}/page/${
          currentPage + 1
        }`;
      };

      prevPage = (e) => {
        window.location.href = `#/characters/querychart/${chart}/page/${
          currentPage - 1
        }`;
      };
    }
  }

  console.log(url);

  const [isOpen, openModal, closeModal] = useModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [loading, error, data, currentPage, hasNextPage] = useFetch(url);

  if (isChart === false) {
    return (
      <div>
        <Filters
          setType={setType}
          setRating={setRating}
          setStatus={setStatus}
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="anime"
            placeholder="Nombre del anime"
            onKeyPress={handleKeyPress}
            value={form.artist}
          />
          {data === null ? (
            <h3>cargando...</h3>
          ) : (
            data.data.map((el) => (
              <CardFluid
                key={el.mal_id}
                id={el.mal_id}
                title={el.title}
                image={el.images.jpg.image_url}
                openModal={openModal}
                isOpen={isOpen}
                getDetails={getDetails}
              />
            ))
          )}
          {currentPage > 1 && <ButtonPrev task={prevPage}></ButtonPrev>}
          {hasNextPage === true && <ButtonNext task={nextPage}></ButtonNext>}
        </form>
      </div>
    );
  } else if (isChart === true) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="anime"
            placeholder="Nombre del anime"
            onKeyPress={handleKeyPress}
            value={form.artist}
          />

          {data === null ? (
            <h3>cargando...</h3>
          ) : (
            data.data.map((el) => (
              <CardFluid
                key={el.mal_id}
                id={el.mal_id}
                title={el.name}
                image={el.images.jpg.image_url}
                openModal={openModal}
                isOpen={isOpen}
                getDetails={getDetails}
              />
            ))
          )}
        </form>

        {currentPage > 1 && <ButtonPrev task={prevPage}></ButtonPrev>}
        {hasNextPage === true && <ButtonNext task={nextPage}></ButtonNext>}
      </div>
    );
  }
};

export default Anime;
