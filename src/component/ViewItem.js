import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "./files/Data.json";
import axios from "axios";
export const ViewItem = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = axios
      .get("https://nicetech.onrender.com/product/getProduct")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="w-screen min-h-screen flex justify-center items-center">
        <div>
          {Data.filter((item) => item.model === id).map((item) => {
            return (
              <div>
                <p>{item.model}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
