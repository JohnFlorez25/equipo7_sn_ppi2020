import React from "react";
import "../css/styles.css";

class Menu2 extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <center>
          {" "}
          <h1>
            {" "}
            <strong> Comienza Tu Aprendizaje:</strong>
          </h1>{" "}
        </center>

        <br />
        <br />
        <br />
        <center>
          <button type="button" class="btn1 btn-primary btn-lg btn-block">
            <a href="Nivel1">Comenzar Quiz </a>
          </button>
          <br />
          <br />
          <br />
          <button type="button" class="btn1 btn-secondary btn-lg btn-block">
            Puntuacion
          </button>
        </center>

        <br />
        <br />
        <br />
        <br />
        <br />

        <button type="button" class="bow">
          <a href="Temas">..Volver a la Teoria</a>
        </button>
      </div>
    );
  }
}
export default Menu2;
