import { useFetchGit } from "../hooks/useFetchGit";
import GifGridItem from "./GitGridItem";

const GitGrid = ({ category }) => {
  const { data, loading } = useFetchGit(category);

  return (
    <div>
      <h3>{category}</h3>
      {loading ? "Cargand ...." : " Data cargada"}
      <div className="card-grid">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GitGrid;
