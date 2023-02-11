import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Peliculas</h2>
      <Link to="/">Home</Link>
      <Link to="/create">Crear</Link>
    </div>
  );
};

export default Navbar;
