import { useFetchGit } from "../hooks/useFetchGit";
import GifGridItem from "./GitGridItem";

const GitGrid = ({ category }) => {
  const { data: images, loading } = useFetchGit(category);

  return (
    <div>
      <h3>{category}</h3>
      {loading && "Cargand ...."}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GitGrid;
