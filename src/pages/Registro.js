import React from "react";
import "../css/styles.css";


class Registro extends React.Component {
  render() {
    return (
    <div className="container-fluid">
      <center> <h1> <strong> Registro</strong></h1> </center>
      <br/>
      <br/>
        <form>
  <div class="form-row registro">
    <div class="form-group col-md-6">
      <label for="inputEmail4"><strong>Correo Electronico:</strong></label>
      
      <input type="email" className="form-control text" id="inputEmail4"/>
    </div>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4"><strong>Contraseña:</strong></label>
      <input type="password" className="form-control text" id="inputPassword4"/>
    </div>
  <div class="form-group">
    <label for="inputAddress"><strong>Confirmar Contraseña:</strong></label>
    <input type="text" className="form-control text" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2"><strong>Nombre Completo:</strong></label>
    <input type="text" className="form-control text" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity"><strong>Edad:</strong></label>
      <input type="text" className="form-control text" id="inputCity"/>
    </div>
    
  </div>
    <br/>
    <br></br>
  <center><button class="btn"><a href="comenzarsesion">Siguiente</a></button></center>
</form>
<div>
      <br/>
      <br/>
      <br/>
            <a href="iniciarsesion"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
        </div>
    </div>  
     );
  }
}
export default Registro;