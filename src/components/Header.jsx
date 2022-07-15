import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CarrouselDom from "./Carousel.jsx";


export default () => {
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");

  const handleClick = () => {
    if (userSearch === "") return alert("Debe ingresar id");
  };

  return (
    <div className="w-max bg-dark ">
      <div className=" text-center container-fluid">
        <div className="row align-items-center ">
          <p
            className=" h1 col-sm-4 text-white pointer"
            onClick={() => navigate("/")}
          >
            BuscaLibros
          </p>
          <div className="col-sm-6">
            <input
              type="text"
              placeholder="Ingrese un id "
              className="col-sm-10 "
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
            <Link
              to={{ pathname: `/buscar/?${userSearch}` }}
              onClick={handleClick}
            >
              <BiSearchAlt2
                className="col-sm-2 pointer mx-0"
                color="white"
                size={30}
              />
            </Link>
          </div>
          <span
            className=" text-white col-sm-2 col-lg-1 pe-auto pointer"
            onClick={() => navigate("listado")}
          >
            Ver lista
          </span>
        </div>
      </div>
      
    </div>
  );
};
