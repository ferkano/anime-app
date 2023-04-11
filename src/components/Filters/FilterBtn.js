import React from "react";

const FilterBtn = ({ name, index, items, task }) => {
  return (
    <div>
      <div className="form-check">
        <input
          onClick={() => {
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
