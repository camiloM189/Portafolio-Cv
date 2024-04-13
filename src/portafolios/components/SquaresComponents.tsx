import { useRef, useState } from "react";
import { useDescargarCurriculum } from "../hooks/useDescargarCurriculum";
import { CalidadIESComponents } from "./SquaresComponents/CalidadIESComponents";
import { HeroBardsComponents } from "./SquaresComponents/HeroBardsComponents";
import { CvComponents } from "./SquaresComponents/CvComponents";
import { ContactoComponents } from "./SquaresComponents/ContactoComponents";
import { DesingComponents } from "./SquaresComponents/DesingComponents";
import { ContactosImgCompoents } from "./SquaresComponents/ContactosImgCompoents";
import { ProyectosComponents } from "./SquaresComponents/ProyectosComponents";

interface IType {
  setProyectos:(type: boolean) => void;
  proyectos:boolean;

}


export const SquaresComponents = ({proyectos,setProyectos}:IType) => {
 

  const descargarCurriculum = useDescargarCurriculum();
  const [contactos, setContactos] = useState(false);
  const contactosRef = useRef<HTMLDivElement>(null);
  const onChangeContactos = () => {
    setContactos(!contactos);

    if(contactosRef.current){
      setTimeout(() => {
       contactosRef.current?.scrollIntoView({behavior:'smooth'}) 
      })
    }

  }
  
  
  
    return (	
  
        <section className="row g-0 mb-5 " style={{display:'flex',justifyContent:'space-between'}} >
          <ProyectosComponents proyectos={proyectos} setProyectos={setProyectos}/>
          <h3 className={`${(proyectos) ? 'animate__animated animate__bounceInLeft' : 'd-none'}`}>Proyectos</h3>
       
        <CalidadIESComponents proyectos={proyectos}/>
        <HeroBardsComponents proyectos={proyectos}/>
        <CvComponents descargarCurriculum={descargarCurriculum}/>
        <ContactoComponents onChangeContactos={onChangeContactos} contactos={contactos}/>
        <DesingComponents/>
      
          <h3 className={`${(contactos) ? '' : 'd-none'} animate__animated animate__bounceInLeft mt-3`}>Contacto</h3>
          <ContactosImgCompoents contactos={contactos} contactosRef={contactosRef} />
     
        </section>
    )

}

