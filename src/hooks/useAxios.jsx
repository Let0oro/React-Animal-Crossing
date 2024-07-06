import React, { useEffect, useMemo, useState } from "react";

const useAxios = (url) => {
  const [listItems, setListItems] = useState([]);

  useMemo(() => {
    const fetchAPI = async (url) => {
      if (!new URL(url))
        throw new Error("URL provided is not correct");
      try {
        const response = await fetch(url, {credentials: 'omit', mode: 'cors', headers: {
        }});
        const data = await response.json();
        if (!response.ok || response.status > 300) throw new Error(data);

        console.log(data);
        setListItems(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchAPI(url);
  }, [url]);

  return {
    listItems
  }
};

export default useAxios;
