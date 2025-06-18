import { Button } from "react-bootstrap";

const EmpleadoRow = ({nombre, tipo, negocio, imagen}) => {
    return (
        <div className="card mb-3">
          <div className="row g-0 contenedorElon p-1">
            <div className="col-5 col-md-8 col-lg-4 contenedorImagenElon">
              <img src={imagen} className="empleadoAvatar" alt="Imagen de Elon Musk"/>
            </div>
            <div className="col-6 col-md-4 col-lg-8">
              <div className="card-body">
                <h5 className="card-title text-danger text"><strong>&lt;Empleado Avatar/&gt;</strong></h5>
                <h3 className="card-text">
                  {nombre}
                </h3>
                <div className="d-flex"> 
                  <p className="card-text mx-2 mx-md-4">
                    {tipo}
                  </p>
                  <Button variant="info" className="text-white">{negocio}</Button>
                </div>
                <h5 className="card-text text-success text-end">
                  &lt;Empleado Row/&gt;
                </h5>
              </div>
            </div>
          </div>
        </div>
    );
};

export default EmpleadoRow;