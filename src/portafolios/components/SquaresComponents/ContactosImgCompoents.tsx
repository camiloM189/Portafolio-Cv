
interface Icontactos {
    contactos:boolean
}



export const ContactosImgCompoents = ({contactos}:Icontactos) => {
    return (	
        <article className={`row text-center  ${(contactos) ? '' : 'd-none'} d-flex justify-content-center `}>
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
    </article> 
    )	
}