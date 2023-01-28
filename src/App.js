import './App.css';
import { Component } from 'react';
import Titulo1 from './Componentes/titulo1';
import Titulo2 from './Componentes/titulo2';
import Listado from './Componentes/listado';

class App extends Component {
  render() {
    return (
      <>
        <Titulo1/>
        <Titulo2/>
        <Listado/>
      </>
    );
  }
}
export default App;
