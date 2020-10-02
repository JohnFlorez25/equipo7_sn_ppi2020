import React from "react";

class Section2 extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <br/>
        <center>
          {" "}
          <button
            type="button"
            class="boton1"
            data-toggle="button">
            <a href="comenzarSesion">Iniciar sesion</a>
          </button>{" "}
        </center>
        <br></br>
        <br/>
        <div className="container-fluid">
          <center>
            <button
              type="button"
              class="boton1"
              data-toggle="button">
              <a href="registro">Registrarse</a>
            </button>{" "}
          </center>
        </div>
      </div>
    );
  }
}
export default Section2;
