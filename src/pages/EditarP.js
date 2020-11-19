import React from "react";
import "../css/styles.css";


class EditarP extends React.Component {
  render() {
    return (
    <div className="container-fluid">
      <center> <h1> <strong> Editar Perfil:</strong></h1> </center>
      <br/>
      <br/>
        <form>
  <div class="form-row registro">
    <div class="form-group col-md-6">
      <label for="inputEmail4"><strong>Cambiar Nombre:</strong></label>
      
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    </div>
    <br/>
    <div class="form-group col-md-6">
      <label for="inputPassword4"><strong>Cambiar Correo Electronico:</strong></label>
      <input type="password" className="form-control " id="inputPassword4"/>
    </div>
    <br/>
  <div class="form-group">
    <label for="inputAddress"><strong> Nueva Contraseña:</strong></label>
    <input type="text" className="form-control " id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <br/>
  <div class="form-group">
    <label for="inputAddress2"><strong>Confirmar Nueva Contraseña:</strong></label>
    <input type="text" className="form-control " id="inputAddress2" placeholder=""/>
  </div>
  
    
    
  <center><button class="btn"><a href="Perfil">Guardar Cambios</a></button></center>
</form>
<div>
      <br/>
      <br/>
     
            <a href="Perfil"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
        </div>
    </div>  
     );
  }
}
export default EditarP;