import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../components/Layout";
import { usoAppContext } from "../store/Store";

const View = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = usoAppContext();
  console.log(params);
  useEffect(() => {
    const book = store.getItem(params.id);
    setItem(book);
  }, []);
  if (!item) {
    return <Layout>Item not found</Layout>;
  }
  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="400px" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Leido" : "Por terminar"}</div>
    </Layout>
  );
};

export default View;
