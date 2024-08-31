
interface Iproyectos{
    proyectos:boolean
}




export const HeroBardsComponents = ({proyectos}:Iproyectos) => {
    return (	
        <article  className={`col-lg-6 col-md-12 mb-1`} 
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
        </article> 
    )	
}