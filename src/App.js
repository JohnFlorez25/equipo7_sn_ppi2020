import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import IniciarSesion from "./pages/iniciarSesion";
import Registro from "./pages/Registro";
import comenzarSesion from "./pages/comenzarSesion";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import EditarP from "./pages/EditarP";
import Temas from "./pages/Temas";
import Tema1 from "./pages/Tema1";
import Tema2 from "./pages/Tema2";
import Tema3 from "./pages/Tema3";
import Menu2 from "./pages/Menu2";
import Nivel1 from "./pages/Nivel1";
import Nivel2 from "./pages/Nivel2";
import Nivel3 from "./pages/Nivel3";
import Nivel4 from "./pages/NIvel4";
import Puntuacion from "./pages/Puntuacion";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciarsesion" component={IniciarSesion} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/comenzarsesion" component={comenzarSesion} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/EditarP" component={EditarP} />
        <Route exact path="/Temas" component={Temas} />
        <Route exact path="/Tema1" component={Tema1} />
        <Route exact path="/Tema2" component={Tema2} />
        <Route exact path="/Tema3" component={Tema3} />
        <Route exact path="/Menu2" component={Menu2} />
        <Route exact path="/Nivel1" component={Nivel1} />
        <Route exact path="/Nivel2" component={Nivel2} />
        <Route exact path="/Nivel3" component={Nivel3} />
        <Route exact path="/Nivel4" component={Nivel4} />
        <Route exact path="/Puntuacion" component={Puntuacion} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;