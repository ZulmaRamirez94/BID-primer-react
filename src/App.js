import './App.css';
import { Component } from 'react';
import Titulo from './Componentes/titulo';
import Listado from './Componentes/listado';


class App extends Component {
  render() {
    return (
      <>
        <Titulo/>
        <Listado/>
      </>
    );
  }
}
export default App;
