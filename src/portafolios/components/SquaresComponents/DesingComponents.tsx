




export const DesingComponents = () => {
    return (	
        <article className="col-lg-4 col-md-12 mb-1" style={{cursor:'pointer',overflow:'hidden'}}  data-bs-target="#diseño" data-bs-toggle="modal">
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
        
      </article>	
    )	
}