

interface Iproyectos{
    proyectos:boolean
}


export const CalidadIESComponents = ({proyectos}:Iproyectos) => {
    return (	
    <article  className={`col-lg-6 col-md-12 mb-1 `} 
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

     

        



    </article>
    )	
}