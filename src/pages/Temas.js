import React from "react";
import "../css/styles.css";


class Temas extends React.Component {
  render() {
    return (
        <div className="container-fluid" >
<br/>
        <center> <h2> <strong> El Reciclaje</strong></h2> </center>

          <br/>
          <br/>
          <br/>
        <center><button type="button" class="btn1 btn-primary btn-lg btn-block"><a href="Tema1">Que es reciclar, Para que,
 como reciclar?</a> </button>
        <br/>
          <br/>
          <br/>
    <button type="button" class="btn1 btn-secondary btn-lg btn-block"><a href="Tema2">Aprovechamiento de Recursos</a></button>
     <br/>
          <br/>
          <br/>
    <button type="button" class="btn1 btn-secondary btn-lg btn-block"> <a href="Tema3">Manejo de las Tres R</a></button></center>
    <br/>
      <br/>
      <br/>
  
    
     
   
        </div>  
     );
  }
}
export default Temas;