import React, { useEffect, useState } from "react";

const useFetchGif = (categorie, setIsLoading) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);
        const request = await fetch(
          `https://${import.meta.env.VITE_APP_URL}?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }&q=${categorie}&limit=${20}`
        );
        const { data } = await request.json();
        const gifs = data.map((gif) => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url,
        }));
        setData(gifs);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return data;
};

export default useFetchGif;
