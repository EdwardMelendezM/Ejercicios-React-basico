import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGits";
import GifGridItem from "./GitGridItem";

const GitGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GitGrid;
