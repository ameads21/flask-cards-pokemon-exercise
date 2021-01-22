import axios from "axios";
import React, { useEffect, useState } from "react";

function useAxios(url) {
  const [responses, setResponses] = useState([]);
  console.log(url);
  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };
  return [responses, addResponseData];
}

export default useAxios;
