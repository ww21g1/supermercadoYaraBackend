import React from "react";

import '../../css/home/headerLogin.css'

class Header extends React.Component{

    render(){
        return(
            
        <header className="site-header sticky-top py-1">
            <nav className="container d-flex flex-column flex-md-row justify-content-between">
            
            
                <img src="../../assets/logo10.png" alt="Logo do supermercado Vila Yara" width="70" height="60"  class="d-block mx-auto"/>
            
                
                <a href="#">Supermercado Vila Yara</a>

            </nav>
        </header>
        
        );
    }

}

export default Header

