import React from "react";
import "../css/styles.css";

class Nivel3 extends React.Component {
  render() {
    return (
     <div className="contenedor">
      <div className="pregresp">
    
         <center><h2 className="TextoP">Nivel 3</h2></center>
         <br/>
         <div class="pregunta1 pregunta TextoP"> <strong><h3>¿Cuál de los siguientes materiales NO podemos reciclar?  </h3></strong><br />
        </div>
        
        <div class="res respuestas1">
          <input type="radio" name="preg1" value="1" /> <strong> a) Botellas.  </strong><br />
          <input type="radio" name="preg1" value="2" />  <strong> b) tarros de perfumes. </strong><br />
          <input type="radio" name="preg1" value="3" /> <strong> c) cuadernos. </strong><br />
          <input type="radio" name="preg1" value="4" /> <strong>d) cerámicas. </strong><br />
        </div>
        <br/>
      <br/>
      
        <div class="pregunta2 pregunta TextoP"> <strong><h3>8. ¿Qué es lo que menos utilizamos en el reciclaje? </h3></strong><br />
        </div>
        <div class="res respuestas2 TextoP">
          <input type="radio" name="preg2" value="5" /> <strong>a) aparatos tecnológicos.  </strong><br />
          <input type="radio" name="preg2" value="6" /> <strong> b) materias primas. </strong><br />
          <input type="radio" name="preg2" value="7" />  <strong>c) máquinas. </strong><br />
          <input type="radio" name="preg2" value="8" />  <strong>d) las manos.   </strong><br />
        </div>
        <br/>
      <br/>
    
        <div class="pregunta3 pregunta TextoP"> <strong><h3>9. ¿Dónde debemos llevar el reciclaje?  </h3> </strong><br />
        </div>
        <div class="res respuestas3">
          <input type="radio" name="preg3" value="9" /> <strong>  a) al basurero. </strong> <br />
          <input type="radio" name="preg3" value="10" />  <strong>b) al parque.  </strong><br />
          <input type="radio" name="preg3" value="11" /> <strong> c) a un puesto de recogida.  </strong><br />
          <input type="radio" name="preg3" value="12" /> <strong> d) En la esquina de la cuadra.  </strong><br />
        </div>
        
       
      </div>
      <div className="row">
      <div className="col"> 
      <button type="submit" className="btn7"><a href="Nivel4">Siguiente-></a></button>

           
       </div>
          </div>
    </div>
    );
  }
}
export default Nivel3;