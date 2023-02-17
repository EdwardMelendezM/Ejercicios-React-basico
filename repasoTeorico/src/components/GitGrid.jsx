import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGits";
import GifGridItem from "./GitGridItem";
import { useFetchGit } from "../hooks/useFetchGit";

const GitGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);
  const { data, loading } = useFetchGit();

  return (
    <div>
      <h3>{category}</h3>
      {loading ? "Cargand ...." : " Data cargada"}
      {/* <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div> */}
    </div>
  );
};

export default GitGrid;
