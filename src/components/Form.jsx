import React, { useState } from "react";
import "./Form.css";
import List from "./List";
import BaseColaboradores from "./BdColaboradores";
import Button from "react-bootstrap/Button";

function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const regex = /^[a-zA-ZÀ-ú ]+$/;

  const addColaborador = (e) => {
    e.preventDefault();

    if (nombre === "" || correo === "") {
      alert("No puede dejar campos vacios");
    } else if (regex.test(nombre) !== true) {
      alert("El nombre no puede contener caracteres numericos o simbolos");
    } else {
      const newId = BaseColaboradores.length + 1;
      BaseColaboradores.push({
        id: String(newId),
        nombre: nombre,
        correo: correo,
      });
    }
    setNombre("");
    setCorreo("");
  };

  return (
    <div>
      <form onSubmit={addColaborador}>
        <div className="formControl">
          <label>Nombre del colaborador</label>
          <input
            type="text"
            
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            placeholder="Ingresa el nombre del colaborador"
            value={nombre}
          />
        </div>
        <div className="formControl">
          <label>Correo del colaborador</label>
          <input
            type="text"
            
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
            placeholder="Ingresa el correo del colaborador"
            value={correo}
          />
        </div>
        <Button type="submit">Agregar colaborador</Button>
      </form>
      <List />
    </div>
  );
}

export default Form;
