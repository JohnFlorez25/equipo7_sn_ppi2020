import React from "react";
import "../css/styles.css";


class Perfil extends React.Component {
  render() {
    return (
      <div className="container-fluid">

          <div class="card" style2="width: 18rem;">
           <img src="https://fotos.subefotos.com/28aadafc73b7332ed64adafd848843f5o.jpg" class="card-img-top" alt="1"/>
      <div class="card-body">
          <h5 class="card-title">Imformacion Personal</h5>
          <strong><p class="card-text">Nombre: Felipe Rodriguez Alvarino</p></strong>
          <strong><p class="card-text">Edad: 17 Años</p></strong>
          <strong><p class="card-text">Correo: FelipitoFoxFox@gmail.com</p></strong>
         <a href="EditarP"> Editar...</a>
         </div>
       </div>
<br/>

       <center><button class="btn"><a href="Menu">Comenzar Aprendizaje</a></button></center>
       <br/>
      </div>
      );
   }
 }
 export default Perfil;