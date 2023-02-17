import { useEffect, useState } from "react";
import GifGridItem from "./GitGridItem";

const GitGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=one punch&limit=10&api_key=TQEzcZdgf03pX0wAQmg1H2ZTHKH3ymSb";
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };
  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </ol>
    </div>
  );
};

export default GitGrid;
