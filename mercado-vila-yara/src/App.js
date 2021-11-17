import React from 'react';

//import Login from './views/Login'
import UsuarioCadastro from './views/UsuarioCadastro'
import './css/global.css'
//import Header from './components/home/HeaderLogin';
//import Footer from './components/home/Footer';

import 'bootswatch/dist/lux/bootstrap.css'
import HeaderAdm from './components/comuns/HeaderAdm';

function App() {
  return (
    <div>
      <HeaderAdm/>
      <UsuarioCadastro/>
      
    </div>
  );
}

export default App;
