import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const inputValueTrim = inputValue.trim();
    if (inputValueTrim.length <= 1) return;
    onNewCategory(inputValueTrim);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        id=""
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddCategory;
