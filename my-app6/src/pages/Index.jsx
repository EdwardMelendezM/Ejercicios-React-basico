import { Link } from "react-router-dom";
import { usoAppContext } from "../store/Store";

const Index = () => {
  const { items } = usoAppContext();
  return (
    <div>
      <Link to="/create">Home</Link>

      {items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default Index;
