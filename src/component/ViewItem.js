import React from "react";
import { useParams } from "react-router-dom";
import Data from "./files/Data.json";
export const ViewItem = () => {
  const { id } = useParams();
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
