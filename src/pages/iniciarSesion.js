import React from "react";
import "../css/styles2.css"
import Header from "../components/IniciarSesion/Header";
import Section2 from "../components/IniciarSesion/section";

class IniciarSesion extends React.Component {
  render() {
    return (
    <div>
     <Header className="" />
     <br />
     <Section2 /> 
    </div>  
    );
  }
}
export default IniciarSesion;