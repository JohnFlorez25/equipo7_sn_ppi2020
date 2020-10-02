import React from "react";
import "../css/styles.css";
import Header from "../components/Inicio/header";
import Main from "../components/Inicio/main";

class Inicio extends React.Component {
  render() {
    return (
    <div>
     <Header />
     <br />
     <Main />
<br />
<br/>
<center><button type="button" className="boton1">
                  <a href="iniciarsesion"><strong>Comenzar</strong></a>
                </button></center>
    </div>  
    );
  }
}
export default Inicio;