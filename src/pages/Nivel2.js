import React from "react";
import "../css/styles.css";

class Nivel2 extends React.Component {
  render() {
    return (
     <div className="contenedor">
      <div className="pregresp">
    
         <center><h2 className="TextoP">Nivel 2</h2></center>
         <br/>
         <div class="pregunta1 pregunta TextoP"> <strong><h3>4. ¿cuáles son las R más conocidas dentro del reciclaje? </h3></strong><br />
        </div>
        
        <div class="res respuestas1">
          <input type="radio" name="preg1" value="1" /> <strong> a) reducción, respeto y recolección.  </strong><br />
          <input type="radio" name="preg1" value="2" />  <strong> b) reducir, reciclar y reutilizar.</strong><br />
          <input type="radio" name="preg1" value="3" /> <strong> c) reiniciar, reusar y registrar.</strong><br />
          <input type="radio" name="preg1" value="4" /> <strong>d) reutilizar y educir. </strong><br />
        </div>
        <br/>
      <br/>
      
        <div class="pregunta2 pregunta TextoP"> <strong><h3>5. ¿Qué es el reciclaje?</h3></strong><br />
        </div>
        <div class="res respuestas2 TextoP">
          <input type="radio" name="preg2" value="5" /> <strong> a) es un proceso donde recolectamos residuos para luego ser transformados en nuevos materiales. </strong><br />
          <input type="radio" name="preg2" value="6" /> <strong>  b) realizar campañas, para contribuir con el cuidado del aire. </strong><br />
          <input type="radio" name="preg2" value="7" />  <strong>c) generar estrategias para frenar el cambio climático y deterioro del planeta. </strong><br />
          <input type="radio" name="preg2" value="8" />  <strong>d) prevenir que los animales coman basura.  </strong><br />
        </div>
        <br/>
      <br/>
    
        <div class="pregunta3 pregunta TextoP"> <strong><h3>6. ¿Cuál de las siguientes estrategias aportan al reciclaje? </h3> </strong><br />
        </div>
        <div class="res respuestas3">
          <input type="radio" name="preg3" value="9" /> <strong>  a) utilizar el papel, para no producir más plástico.</strong> <br />
          <input type="radio" name="preg3" value="10" />  <strong>b) implementar paneles solares en nuestras casas, y obtener la energía de allí. </strong><br />
          <input type="radio" name="preg3" value="11" /> <strong> c) separar los residuos y depositarlos en el contenedor correspondiente.  </strong><br />
          <input type="radio" name="preg3" value="12" /> <strong>d) cerrar la llave del agua, cada vez que hagamos uso de esta.  </strong><br />
        </div>
        
       
      </div>
      <div className="row">
      <div className="col"> 
      <button type="submit" className="btn7"><a href="Nivel3">Siguiente-></a></button>

           
       </div>
          </div>
    </div>
    );
  }
}
export default Nivel2;