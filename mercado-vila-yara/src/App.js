import React from 'react';

import Login from './views/home/login'
import './css/global.css'
import Header from './views/home/HeaderLogin';
import Footer from './views/home/Footer';

import 'bootswatch/dist/lux/bootstrap.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
