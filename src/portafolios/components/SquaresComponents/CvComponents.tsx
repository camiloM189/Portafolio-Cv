
interface IdescargarCurriculum {
    descargarCurriculum:() => void
}


export const CvComponents = ({descargarCurriculum}:IdescargarCurriculum) => {
    return (	
    <article className="col-lg-4 col-md-12 mb-1" style={{cursor:'pointer',overflow:'hidden'}} onClick={descargarCurriculum}>
        <div className="card text-bg-dark border-0  rounded-0">
          <img src="/img-portafolios/cv.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
          <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
            <h5 className="card-title text-center">Cv</h5>
          </div>
        </div>
    </article>	
    )	
}