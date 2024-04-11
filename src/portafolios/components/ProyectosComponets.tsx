
export const ProyectosComponets = () => {
    return (	
        <section className="row g-0 mb-5 " style={{display:'flex'}}>
            <h1>Mis Proyectos</h1>
        <article className="col-6" style={{cursor:'pointer'}}  data-bs-target="#proyecto1" data-bs-toggle="modal">
          <div className="card text-bg-dark border-0  rounded-0" >
            <img src="/calidadIES1.jpg" className="img-fluid" alt="proyecto1" />
            <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center">
              <h5 className="card-title text-center">Calidad IES</h5>
          
             
            </div>
          </div>



          <div className="modal fade" id="proyecto1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
            
          
        </article>
      
        <article className="col-6" style={{cursor:'pointer'}}  data-bs-target="#proyecto2" data-bs-toggle="modal">
          <div className="card text-bg-dark border-0  rounded-0">
            <img src="/Hero-Barf.jpg" className="card-img" alt="proyecto2" />
            <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center">
              <h5 className="card-title text-center">Hero's Barf</h5>
          
             
             
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
              es una empresa dedicada a la producción y venta de comida para perros B.A.R.F
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

            
          
        </article>
   
     </section>	
    )	
}