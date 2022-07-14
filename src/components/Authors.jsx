import React from "react";
import { useLocation } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";

import ListItem from "./ListItem";

export default () => {
  let location = useLocation();

  let data = JSON.parse(localStorage.getItem("data"));
  let queryId = location.search.substring(1);
  const filter = data.filter((el) => el.id === parseInt(queryId));

  return (
    <div className="container mt-5 ">
      {filter.length > 0 ? (
        filter.map((el) => (
          <>
            <h2 className="mb-4"  >
              Detalle
            </h2>
            <ListItem el={el} key={el.id} />
          </>
        ))
      ) : (
        <div className="row mb-4">
          <BiErrorAlt size={30} />
          <p className="d-block text-center py-2 ">
            No se han encontrados resultados con id "{queryId}"
          </p>
        </div>
      )}
    </div>
  );
};
