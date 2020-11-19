import React from "react";
import "../css/styles.css";

class Nivel1 extends React.Component {
  render() {
    return (
     <div className="contenedor">
      <div className="pregresp">
    
         <center><h2 className="TextoP">Nivel 1</h2></center>
         <br/>
         <div class="pregunta1 pregunta TextoP"> <strong><h3>1. ¿Cuál de las siguientes opciones, es una razón para reciclar? </h3></strong><br />
        </div>
        
        <div class="res respuestas1">
          <input type="radio" name="preg1" value="1" /> <strong> a) puedo ganar dinero. </strong><br />
          <input type="radio" name="preg1" value="2" />  <strong> b) combatimos contra el cambio climático.</strong><br />
          <input type="radio" name="preg1" value="3" /> <strong> c) ayudamos a las empresas de aseo.</strong><br />
          <input type="radio" name="preg1" value="4" /> <strong> d) mejoramos el aire de nuestra ciudad. </strong><br />
        </div>
        <br/>
      <br/>
      
        <div class="pregunta2 pregunta TextoP"> <strong><h3>2. Uno de los principales objetivos del reciclaje es:</h3></strong><br />
        </div>
        <div class="res respuestas2 TextoP">
          <input type="radio" name="preg2" value="5" /> <strong> a) generar grandes ingresos financieros.</strong><br />
          <input type="radio" name="preg2" value="6" /> <strong> b) reutilizar y generar nuevos productos.</strong><br />
          <input type="radio" name="preg2" value="7" />  <strong>c) Conservar el medio ambiente y reducir la contaminación. </strong><br />
          <input type="radio" name="preg2" value="8" />  <strong>d) cuidar y conservar los bosques. </strong><br />
        </div>
        <br/>
      <br/>
    
        <div class="pregunta3 pregunta TextoP"> <strong><h3>3. ¿cómo se llama la regla, la cual me permite volver a dar vida útil a algo?</h3> </strong><br />
        </div>
        <div class="res respuestas3">
          <input type="radio" name="preg3" value="9" /> <strong>  a) reusar.</strong> <br />
          <input type="radio" name="preg3" value="10" />  <strong> b) reiniciar.</strong><br />
          <input type="radio" name="preg3" value="11" /> <strong> c) reducir. </strong><br />
          <input type="radio" name="preg3" value="12" /> <strong> d) reutilizar. </strong><br />
        </div>
        
       
      </div>
      <div className="row">
      <div className="col"> 
      <button type="submit" className="btn7"><a href="Nivel2">Siguiente-></a></button>

           
       </div>
          </div>
    </div>
    );
  }
}
export default Nivel1;