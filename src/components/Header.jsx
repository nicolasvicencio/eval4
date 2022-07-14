import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");
  const [newSearch, setNewSearch] = useState(false);

  const handleIcon = (e) => {
    e.preventDefault()
    if (userSearch !== '') {
      setNewSearch(true);
      localStorage.setItem("id", userSearch);
      navigate("/autores");
      setUserSearch('')
    } else {
      alert("Debe ingresar un id");
      setNewSearch(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-max bg-primary ">
      <div className=" text-center container-fluid">
        <div className="row align-items-center ">
          <p
            className=" h1 col-sm-4 text-white pointer"
            onClick={() => navigate("/")}
          >
            BuscaLibros
          </p>

          <form 
          className="col-sm-6 col-lg-7" 
          onSubmit={(e) => handleIcon(e)}>
            <input
              type="text"
              placeholder="Ingrese un id "
              className="col-sm-10 "
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
            <BiSearchAlt2
              className="col-sm-2 pointer"
              color="white"
              size={30}
              onClick={handleIcon}
            />
          </form>
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
