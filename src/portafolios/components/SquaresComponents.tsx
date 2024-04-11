import { useState } from "react";
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
  
  const onChangeContactos = () => {
    setContactos(!contactos);
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
        <h3 className={`${(contactos) ? '' : 'd-none'} mt-3`}>Contacto</h3>
        <ContactosImgCompoents contactos={contactos}/>
        </section>
    )

}

{/* <article  className={`col-lg-12 col-md-12 mb-1 `} style={{ cursor: 'pointer', display: proyectos ? 'none' : 'block',overflow:'hidden' }} onClick={() => setProyectos(true)}>
<div className="card text-bg-dark border-0  rounded-0" >
  <img src="/img-portafolios/proyectos.jpg" className="img-fluid" alt="cliente1" style={{height:'400px', objectFit: 'cover'}} />
  <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
    <h5 className="card-title text-center">Proyectos</h5>      
  </div>
</div>            

</article>  */}
 {/* <article  className={`col-lg-6 col-md-12 mb-1 `} 
          data-bs-target="#proyecto1" data-bs-toggle="modal" 
          style={{ cursor: 'pointer', display: proyectos ? 'block' : 'none' ,overflow:'hidden'}}>
          <div className={`${(proyectos) ? 'animate__animated animate__backInLeft' : ''}`}>
          <div className={`card text-bg-dark border-0 rounded-0 `} >
              <img src="/calidadIES1.jpg" className={`img-fluid `} alt="proyecto1" 
               style={{height:'400px', objectFit: 'cover'}}/>
            <div className={`card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center`} style={{justifyContent:'center'}}>
              <h5 className="card-title text-center">Calidad IES</h5>              
            </div>
          </div>  
          </div>          
            <div className="modal fade" id="proyecto1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} 
            aria-labelledby="exampleModalLabel" aria-hidden="true"  >
               <div className="modal-dialog" >
        <div className="modal-content" id='proyecto1'>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Calidad IES</h1>
            <button id='boton-x-calidad' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='mb-2'>
              Calidad IES es firma de consultoría y asesoría que tiene su origen
              en la pasión por la educación y el compromiso con la excelencia académica
            </p>
            <img src="/calidadIES.jpg" alt="" className='img-fluid' />
            <img src="/calidadIES2.jpg" alt="" className='img-fluid' />
            <img src="/calidadIES3.jpg" alt="" className='img-fluid' />
            <img src="/calidadIES4.jpg" alt="" className='img-fluid' />
            <img src="/calidadIES4_1.jpg" alt="" className='img-fluid' />
            <img src="/loginCalidad.jpg" alt="" className='img-fluid' />



            <img src="/calidadIES-contactanos.jpg" alt="" className='img-fluid' />

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <a href="https://calidad-ies-front-end.onrender.com"><button className='btn btn-primary'>Ver pagina</button></a>
          </div>
        </div>
                </div>
            </div> 

       

          



        </article>    */}
   {/* <article  className={`col-lg-6 col-md-12 mb-1`} 
        data-bs-target="#proyecto2" data-bs-toggle="modal" style={{ cursor: 'pointer', display: proyectos ? 'block' : 'none',overflow:'hidden' }}>
          <div className={`${(proyectos) ? 'animate__animated animate__backInRight' : ''}`} >
          <div className="card text-bg-dark border-0  rounded-0 " >
            <img src="/Hero-Barf.jpg" className={`img-fluid `} alt="proyecto2" style={{height:'400px', objectFit: 'cover'}} />
            <div className={`card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center `} style={{justifyContent:'center'}}>
              <h5 className="card-title text-center">Hero's Barf</h5> 
            </div>
            </div>
          </div>            
          <div className="modal fade" id="proyecto2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog"  >
        <div className="modal-content" id='proyecto2'>
          <div className="modal-header" >
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Hero's Barf</h1>
            <button id='boton-x-hero' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='mb-2'>
              Es una empresa dedicada a la producción y venta de comida para perros B.A.R.F
              (Biologically Appropriate Raw Food o Bones and Raw Food).
              Que se apasiona por el bienestar de los perros y cree que una alimentación natural y saludable es esencial para su calidad de vida.
            </p>

            <br />
            <img src="/Hero-Barf.jpg" alt="" className='img-fluid' />
            <img src="/hero-barf4.jpg" alt="" className='img-fluid' />

            <img src="/hero-barf3.jpg" alt="" className='img-fluid' />
            <img src="/hero-barf2.jpg" alt="" className='img-fluid' />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <a href="https://hero-barf.onrender.com"><button type="button" className='btn btn-primary'>Ver Pagina</button></a>
          </div>
        </div>
            </div>
          </div>
        </article>  */}

 {/* <article className="col-lg-4 col-md-12 mb-1" style={{cursor:'pointer',overflow:'hidden'}} onClick={descargarCurriculum}>
          <div className="card text-bg-dark border-0  rounded-0">
            <img src="/img-portafolios/cv.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
            <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
              <h5 className="card-title text-center">Cv</h5>
          
           
             
            </div>
          </div>



  


            
          
        </article> */}


   {/* <article className="col-lg-4 col-md-12 mb-1" style={{cursor:'pointer',overflow:'hidden'}} onClick={onChangeContactos}>
          <div className="card text-bg-dark border-0  rounded-0">
            <img src="/img-portafolios/contacto.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
            <div className={`card-img-overlay ${(contactos) ? 'second-color' : 'second-alpha-color'}  d-flex flex-column justify-content-md-center`} style={{justifyContent:'center'}}>
              <h5 className="card-title text-center">Contacto</h5>
          
             
             
            </div>
          </div>     
        </article> */}

     {/* <article className="col-lg-4 col-md-12 mb-1" style={{cursor:'pointer',overflow:'hidden'}}  data-bs-target="#diseño" data-bs-toggle="modal">
          <div className="card text-bg-dark border-0  rounded-0">
            <img src="/img-portafolios/desing.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
            <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
              <h5 className="card-title text-center">Diseño</h5>
          
             
             
            </div>
          </div>

          <div className="modal fade" id="diseño" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog"  >
        <div className="modal-content" id='diseño'>
          <div className="modal-header" >
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Desing</h1>
            <button id='boton-x-hero' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
       

            <br />
            <img src="/portafolio.jpg" alt="" className='img-fluid' />
            <img src="/tellgure.jpg" alt="" className='img-fluid' />

            <img src="/hero's barf.jpg" alt="" className='img-fluid' />
            <img src="/hero's barf 2.jpg" alt="" className='img-fluid' />
            <img src="/hero's barf 3.jpg" alt="" className='img-fluid' />
            <img src="/graduarte.jpg" alt="" className='img-fluid' />
            <img src="/graduarte 2.jpg" alt="" className='img-fluid' />
            <img src="/graduarte 3.jpg" alt="" className='img-fluid' />
            <img src="/calidad IES.jpg" alt="" className='img-fluid' />
            <img src="/ArtResin.jpg" alt="" className='img-fluid' />
            <img src="/logos IES.jpg" alt="" className='img-fluid' />
      

          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <a href="https://www.behance.net/gallery/178577515/PORTAFOLIO"><button type="button" className='btn btn-primary'>Ver behance</button></a>
          </div>
        </div>
            </div>
          </div>
          
        </article> */}

      {/* <article className={`row text-center  ${(contactos) ? '' : 'd-none'} d-flex justify-content-center `}>
          <div className="col-sm-4 col-4 col-md-4 col-lg-2 " style={{cursor:'pointer'}}>
            <a href="https://github.com/camiloM189">
              <img src="/git.png" className="img-fluid img-contacto animate__animated animate__backInUp" alt="" /></a>
            <p>GitHub</p>
          </div>
          <div className="col-sm-4 col-4 col-md-4 col-lg-2 " style={{cursor:'pointer'}}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jcamilomillan18912@gmail.com">
              <img src="/gmail.png" className="img-fluid img-contacto animate__animated animate__backInUp" alt="" /></a>
            <p>Gmail</p>
          </div>
          <div className="col-sm-4 col-4 col-md-4 col-lg-2 " style={{cursor:'pointer'}}>
          <img src="/telefono.png" className="img-fluid img-contacto animate__animated animate__backInUp" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <p>Telefono</p>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" id='telefono'>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Telefono</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h2>+57 3185095231</h2>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm-4 col-4 col-md-4 col-lg-2 " style={{cursor:'pointer'}}>
          <img src="/ubicacion.png" className="img-fluid img-contacto animate__animated animate__backInUp" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal2" />
            <p>Ubicacion</p>
            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" id='ubicacion'>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel2">Ubicacion</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h2>Cali-Colombia</h2>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm-4 col-4 col-md-4 col-lg-2 " style={{cursor:'pointer'}}>
            <a href="https://www.linkedin.com/in/juan-camilo-millan-cuellar-a78088248/">
              <img src="/link.png" className="img-fluid img-contacto animate__animated animate__backInUp" alt="" /></a>
            <p>Linkelind</p>
          </div>
      </article>  */}