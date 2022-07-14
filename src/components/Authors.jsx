import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default () => {    
  const id = parseInt(localStorage.getItem("id"));
  const data = JSON.parse(localStorage.getItem("data"));
  const details = data.filter((el) => el.id === id)[0];
 
  return (
    <div className="container my-5 ">
      <h2 className="mb-4">Detalle</h2>
      <ListItem el={details} />
    </div>
  );
};
