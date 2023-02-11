import { Link } from "react-router-dom";
import Book from "../components/Book";
import Layout from "../components/Layout";
import { usoAppContext } from "../store/Store";

const Index = () => {
  const { items } = usoAppContext();
  return (
    <Layout>
      {items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layout>
  );
};

export default Index;
