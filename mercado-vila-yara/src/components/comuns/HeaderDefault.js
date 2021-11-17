import React from "react";

import NavbarItem from "./navbarItem";

import '../../css/usuarios/headerDefault.css'

class HeaderDefault extends React.Component{

    render(){
        return(
            
            <header >
            <nav >

                <div><img src="assets/logo.png" alt="Logo do supermercado Vila Yara" width="70" height="60" class="img"></img></div>
                <ul>             
                    <NavbarItem href='/' label="Categorias" />
                    <NavbarItem href='/usuarios' label="Usuarios" />
                    <NavbarItem href='/' label="Sair" />
                    
                </ul>  
            </nav>
        </header>
        
        );
    }

}

export default HeaderDefault