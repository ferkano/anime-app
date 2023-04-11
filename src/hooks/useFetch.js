import { useEffect, useState } from "react";

import { helpHttp } from "../helpers/helpHttp";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(null);

  let api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      console.log(res);
      //console.log(res);
      if (!res.err) {
        setData(res);
        setCurrentPage(
          !res.pagination.current_page ? null : res.pagination.current_page
        );
        setHasNextPage(
          !res.pagination.has_next_page ? null : res.pagination.has_next_page
        );
        setError(null);
      } else {
        setData(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);
  return [loading, error, data, currentPage, hasNextPage];
};

export default useFetch;
