import React, { useState } from "react";
import useFetchGif from "../hooks/useFetchGif";
import GifItem from "./GifItem";

const GifGrid = ({ categorie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const gifs = useFetchGif(categorie, setIsLoading);
  return (
    <div className="card-grid">
      {gifs.length > 0 && isLoading === true ? (
        gifs.map((gif) => <GifItem key={gif.id} {...gif} />)
      ) : (
        <>
          <h1>Cargando...</h1>
        </>
      )}
    </div>
  );
};

export default GifGrid;
