import React, { useState } from "react";
import { useParams } from "react-router";
import ButtonNext from "../components/ButtonNext";
import ButtonPrev from "../components/ButtonPrev";
import CardFluid from "../components/CardFluid";
import useFetch from "../hooks/useFetch";

const initialForm = {
  name: "",
};
const Characters = () => {
  const [form, setForm] = useState(initialForm);

  const { page } = useParams();

  let url = null;

  const [loading, error, data, currentPage, hasNextPage] = useFetch(
    page === undefined
      ? (url = "https://api.jikan.moe/v4/characters")
      : (url = `https://api.jikan.moe/v4/characters?page=${page}`)
  );

  const nextPage = (e) => {
    window.location.href = `#/characters/page/${currentPage + 1}`;
  };
  const prevPage = (e) => {
    window.location.href = `#/characters/page/${currentPage - 1}`;
  };

  const getDetails = (e) => {
    window.location.href = `#/chart/details/${e.target.id}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      const name = e.target.value.replaceAll(" ", "-");
      window.location.href = `#/querychart/${name}`;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <input
        type="text"
        name="anime"
        placeholder="Nombre del anime"
        onKeyPress={handleKeyPress}
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
            getDetails={getDetails}
          />
        ))
      )}
      {currentPage > 1 && <ButtonPrev prevPage={prevPage}></ButtonPrev>}
      {hasNextPage === true && <ButtonNext nextPage={nextPage}></ButtonNext>}
    </div>
  );
};

export default Characters;
