import { Link } from "react-router-dom";

const Book = ({ item }) => {
  return (
    <div>
      <Link to={`/view/${item.id}`}>
        <img src={item.cover} width="200px" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
};

export default Book;
