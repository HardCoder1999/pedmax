import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          console.log("Error while getting events: " + error);
        });
    };

    fetchData();
  }, [url, error]);

  return { loading, data, error };
};

export default useFetch;