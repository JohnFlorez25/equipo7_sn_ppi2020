import React from "react";
import "../css/styles.css";


class Menu extends React.Component {
  render() {
    return (
        <div className="container-fluid" Style3>
        <center> <h1> <strong> Comienza Tu Aprendizaje:</strong></h1> </center>

          <br/>
          <br/>
          <br/>
        <center><button type="button" class="btn1 btn-primary btn-lg btn-block">Teoria </button>
        <br/>
          <br/>
          <br/>
    <button type="button" class="btn1 btn-secondary btn-lg btn-block">Quiz</button>
     <br/>
          <br/>
          <br/>
    <button type="button" class="btn1 btn-secondary btn-lg btn-block"> Puntuacion</button></center>
    <br/>
      <br/>
      <br/>
  
      
     
    <div>
     
            <a href="Pefil"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
        </div>
        </div>  
     );
  }
}
export default Menu;