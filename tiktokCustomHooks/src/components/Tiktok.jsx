import { React, memo, useEffect, useState } from "react";
import TiktokVideo from "./TiktokVideo";
import useFetch from "./useFetch";
import useItems from "./useItems";
import "./tiktok.css";

export default function Tiktok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);

  const [data, response, isLoading] = useFetch(url, "json");
  const [items] = useItems(data);
  useEffect(() => {
    setUrl("http://localhost:4000/page/" + page);
  }, [page]);

  const nextVideo = () => {
    if (index + 2 === items.length) {
      //Cargar mas videos
      setPage(page + 1);
    }
    setIndex(index + 1);
  };
  const prevVideo = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div>
      <div>{isLoading ? "Cargando..." : ""}</div>

      <button disabled={isLoading} onClick={() => prevVideo()}>
        Prev video
      </button>
      <button disabled={isLoading} onClick={() => nextVideo()}>
        Next video
      </button>
      <div className="tiktoksContainerView">
        <div
          className="tiktoksContainer"
          style={{ transform: `translateY(${-1 * index * 960 + "px"}` }}
        >
          <Videos items={items} index={index} />
        </div>
      </div>
    </div>
  );
}

const Videos = memo(({ items, index }) => {
  console.log("Holaa");
  return (
    <>
      {items?.map((item, i) => (
        <TiktokVideo key={item.id} item={item} current={index === i} />
      ))}
    </>
  );
});
