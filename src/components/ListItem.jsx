import React from "react";

export default ({ el }) => {
  return (
    <div className="border my-2 p-3" key={el.id}>
      <h3 className="p-1">ID: {el.id}</h3>
      <p className="p-1 pb-0 mb-0">
        <b>Nombre:</b> {el.nombre}
      </p>
      <p className="p-1 pb-0 mb-0">
        <b>Pseudonimo:</b> {el.pseudonimo}
      </p>
      <p className="p-1 pb-0 mb-0">
        <b>Nacionalidad:</b> {el.nacionalidad}
      </p>
      <p className="p-1 pb-0 mb-0">
        <b>Libros:</b>
      </p>
      <ul>
        {el.obras.map((obra) => (
          <li key={obra}>{obra}</li>
        ))}
      </ul>
    </div>
  );
};
