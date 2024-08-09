import axios from "axios";
import { useEffect, useState } from "react";
const API_HOST = process.env.NEXT_PUBLIC_API_URL;

export const useApiData = <T>(path: string, defaultValue: any): T => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(`${API_HOST}${path}`)
      .catch((err) => err.response)
      .then((response) => {
        setData(response.data);
      });
  }, [path]);

  return data;
};

export default useApiData;
