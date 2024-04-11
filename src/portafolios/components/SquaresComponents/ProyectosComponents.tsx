
interface Iproyectos {
    proyectos:boolean;
    setProyectos:(type: boolean) => void;
}




export const ProyectosComponents = ({proyectos,setProyectos}:Iproyectos) => {
    return (	
        <article  className={`col-lg-12 col-md-12 mb-1 `} style={{ cursor: 'pointer', display: proyectos ? 'none' : 'block',overflow:'hidden' }} onClick={() => setProyectos(true)}>
        <div className="card text-bg-dark border-0  rounded-0" >
          <img src="/img-portafolios/proyectos.jpg" className="img-fluid" alt="cliente1" style={{height:'400px', objectFit: 'cover'}} />
          <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
            <h5 className="card-title text-center">Proyectos</h5>      
          </div>
        </div>            
      </article> 		
    )	
}