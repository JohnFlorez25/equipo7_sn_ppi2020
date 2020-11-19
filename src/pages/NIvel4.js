import React from "react";
import "../css/styles.css";

class Nivel4 extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="pregunta1 pregunta TextoP">
          {" "}
          <strong>
            <h3>¿Que caneca se usa para Reciclar el plastico? </h3>
          </strong>
          <br />
        </div>
        <div class="res respuestas1">
          <input type="radio" name="preg1" value="1" />{" "}
           <img src="https://cdn2.totalcode.net/estra/product-zoom/es/caneca-estrabins-pedal-verde-44l-1.jpg" class="imgt2" alt="1"/> 
          <br />
          <br />
          <input type="radio" name="preg1" value="1" />{" "}
           <img src="https://cdn2.totalcode.net/estra/product-zoom/es/caneca-con-tapa-azul-noche-37l-1.jpg" class="imgt2" alt="1"/> 
          <br />
          <br />
          <input type="radio" name="preg1" value="1" />{" "}
           <img src="https://us.123rf.com/450wm/apopium/apopium1602/apopium160200157/51747884-papelera-de-reciclaje-amarillo-aislado-en-el-fondo-blanco.jpg?ver=6" class="imgt2" alt="1"/> 
          <br />
        </div>
        <button type="submit" className="btn7"><a href="Menu2">Siguiente-></a></button>

      </div>
    );
  }
}
export default Nivel4;
