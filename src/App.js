import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import IniciarSesion from "./pages/iniciarSesion";
import Registro from "./pages/Registro";
import comenzarSesion from "./pages/comenzarSesion";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;