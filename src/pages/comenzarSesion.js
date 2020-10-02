import React from "react";
import "../css/styles.css";


class comenzarSesion extends React.Component {
  render() {
    return (
      <div className="container-fluid">
    <center> <h1> <strong>  Inicio De Sesion</strong></h1> </center>
        <br />
        <br/>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1"><strong>Correo Electronico:</strong></label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><strong>Contraseña:</strong></label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> No soy un Robot</label> 
     </div>
<br/>
<br/>

  <center><button type="submit" class="btn"><a href="Perfil">Iniciar</a></button></center>
</form>
      </div>  
      );
   }
 }
 export default comenzarSesion;