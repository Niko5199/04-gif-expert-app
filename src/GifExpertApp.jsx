import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);
  const [displayError, setDisplayError] = useState(false);

  const onAddCategory = function (newCategory) {
    if (categories.includes(newCategory)) {
      setDisplayError(true);
      return;
    }
    setCategories([newCategory]);
    setDisplayError(false);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      <p
        style={
          displayError
            ? { display: "block", color: "red" }
            : { display: "none" }
        }
      >
        El elemento que ingresas ya esta en la lista
      </p>

      {categories.map((categorie) => (
        <GifGrid categorie={categorie} key={categorie} />
      ))}
    </>
  );
};

export default GifExpertApp;
