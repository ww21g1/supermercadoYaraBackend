import React from "react";

import '../../css/home/footer.css'

class Footer extends React.Component{

    render(){
        return(
            
            <footer>
            <div className="esq">
                <p className="titulo">Grupo G1 - Status 200</p>
                <p>Aline Sena &emsp;-&emsp; Amanda Pereira</p>
                <p>Amanda Santos &emsp;-&emsp; Viviane Kumagai</p>
            </div>
  
            <div className="dir">
                <p className="titulo">Projeto Final Winning Women</p>
                <p>https://github.com/ww21g1/supermercadoYara</p>
                <p>https://github.com/ww21g1/supermercadoYaraFrontend</p>
            </div>
        </footer>
        
        );
    }

}

export default Footer