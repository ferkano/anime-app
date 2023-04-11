import React from "react";

const InputSearch = (handleKeyPress, form) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="anime"
          placeholder="Nombre del anime"
          onKeyPress={handleKeyPress}
          value={form.data}
        />
      </form>
    </div>
  );
};

export default InputSearch;
