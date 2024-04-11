import { useState } from "react";
import { DeveloperComponents } from "./components/DeveloperComponents"
import { QuienSoyComponents } from "./components/QuienSoyComponents"
import { SquaresComponents } from "./components/SquaresComponents"


export const PortafoliosDefinitivo = () => {
  const [proyectos, setProyectos] = useState(false);





    return (	

          <main className="container contenedor-portafolio ">
            <DeveloperComponents/>
            <QuienSoyComponents/>
            <SquaresComponents  setProyectos={setProyectos} proyectos={proyectos}/>
          </main>	
        
 
      	
    )	
}