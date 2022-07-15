import React, { useEffect } from "react";
import { dataJson } from "../data/db.js";
import AcordeonDom from "./Acordeon.jsx";

export default () => {
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:80/api/autores.php");
      const json = await res.json();
      return json;
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    const dataJson = getData().then((x) =>
      localStorage.setItem("data", JSON.stringify(x))
    );
  }, []);

  return (
    <div className="container my-5 text-center ">
      <AcordeonDom />
    </div>
  );
};
