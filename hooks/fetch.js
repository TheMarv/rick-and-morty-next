import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
          setError(null);
        })
        .catch((error_) => {
          setError(error_);
          setLoading(false);
          setData(null);
        });
    }
  }, [url]);
  return { data, loading, error };
}
