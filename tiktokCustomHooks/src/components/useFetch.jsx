import { useEffect, useState } from "react";

export default function useFetch(url, type) {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!url) {
      fetchData();
    }
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        switch (type) {
          case "text":
            const text = await response.text();
            setData(text);
            setIsLoading(false);
            break;
          case "json":
            const json = await response.json();
            setData(json);
            setIsLoading(false);
            console.log("Este es :", json);
            break;
          default:
            break;
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  }, [url]);
  return [data, response, isLoading];
}
