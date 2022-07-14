import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListItem from "./ListItem";
import { BiErrorAlt } from "react-icons/bi";

export default () => {
  let location = useLocation();
  const [empty, setEmpty] = useState(true);

  let data = JSON.parse(localStorage.getItem("data"));
  let queryId = location.search.substring(1);
  const filter = data.filter((el) => el.id === parseInt(queryId));

  return (
    <div className="container mt-5 ">
      {filter.length > 0 ? (
        filter.map((el) => (
          <>
            <h2 className="mb-4" key={el.id}>Detalle</h2>
            <ListItem el={el}  />
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
