import React from "react";
import ListItem from "./ListItem";

export default () => {
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="mt-5 container">
      <h2 className="mb-5 mx-2">Listado de autores</h2>
      {data.map((el) => (
        <ListItem key={el.id} el={el} />
      ))}
    </div>
  );
};
