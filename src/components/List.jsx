import React from "react";
import BaseColaboradores from './BdColaboradores';
import './List.css';


function List() {
  return (
    <div className="listContainer">
        <h1>Listado de colaboradores</h1>
        {
            BaseColaboradores.map((colaborador, index) => {
                return (
                    <div key={index} className="colaboratorContainer">
                        <p>{colaborador.nombre}</p>
                        <p>{colaborador.correo}</p>
                    </div>
                )
            })
        }
    </div>
  );
}

export default List;
