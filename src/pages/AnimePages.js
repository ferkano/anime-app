import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ButtonNext from "../components/ButtonNext";
import ButtonPrev from "../components/ButtonPrev";
import CardFluid from "../components/CardFluid";
import { helpHttp } from "../helpers/helpHttp";
import { useModal } from "../hooks/useModal";

const initialForm = {
  anime: "",
};

const AnimePages = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [animes, setAnimes] = useState(null);
  const [id, setId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(null);
  const [pages, setPages] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");

  const { page } = useParams();

  let api = helpHttp();

  const url = `https://api.jikan.moe/v4/anime?page=${page}&type=${type}&status=${status}&rating=${rating}`;

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      console.log(res);
      //console.log(res);
      if (!res.err) {
        setAnimes(res);
        setCurrentPage(res.pagination.current_page);
        setHasNextPage(res.pagination.has_next_page);
        setError(null);
      } else {
        setAnimes(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });

      const name = e.target.value.replaceAll(" ", "-");
      window.location.href = `#/anime/queryanime/${name}`;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [isOpen, openModal, closeModal] = useModal(false);

  const getDetails = (e) => {
    setId(e.target.id);
    window.location.href = `#/anime/getanime/${e.target.id}`;
  };
  const nextPage = (e) => {
    window.location.href = `#/anime/page/${currentPage + 1}`;
  };
  const prevPage = (e) => {
    window.location.href = `#/anime/page/${currentPage - 1}`;
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="anime"
          placeholder="Nombre del anime"
          onKeyPress={handleKeyPress}
          value={form.artist}
        />
        {animes === null ? (
          <h3>cargando...</h3>
        ) : (
          animes.data.map((el) => (
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
        {currentPage > 1 && <ButtonPrev prevPage={prevPage}></ButtonPrev>}
        {hasNextPage === true && <ButtonNext nextPage={nextPage}></ButtonNext>}
      </form>
    </div>
  );
};

export default AnimePages;
