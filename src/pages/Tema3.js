import React from "react";
import "../css/styles.css";


class Tema3 extends React.Component {
  render() {
    return (
     <div>
      <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://fotos.subefotos.com/bb572c0e3cb10c9cadcbada8e9e55d69o.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> Manejo de las Tres R</h5>
        <p class="card-text">Las tres erres (3R) es una regla para cuidar el medio ambiente, específicamente para reducir el volumen de residuos o basura generada.
        <br/>
        <strong>Reducir:</strong>
Disminuir la cantidad de recursos que utilizamos por medio de otros hábitos y/o técnicas; por ejemplo no pedir bolsas en los supermercados a menos que sea necesario, reducir el consumo de papel etc.
<br/>
<strong>Reutilizar:</strong>
La mayoría de los materiales que usamos día a día pueden ser reutilizados de alguna manera: imprimir el papel por los dos lados, reutilizar la madera de tarimas, donar libros, aparatos eléctricos etc.
<br/>
<strong>Reciclaje:</strong>
Debe de ser la última opción si es que las otras dos R´s no funcionaron o en su defecto, el reciclaje es inevitable. 
        </p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
<div>
      
      
            <a href="Temas"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
        </div>
        <button type="button" class="btn0 btn-secondary"> <a href="Menu2">Siguiente</a></button>
  </div>
   
      
     );
  }
}
export default Tema3;