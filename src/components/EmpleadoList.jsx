import { Button } from "react-bootstrap";

const EmpleadoList = ({ nombre1, imagen1, tipo1, negocio1 }) => {
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0 p-1">
        <div className="col-5 col-md-8 col-lg-4">
          <img src={imagen1} className="empleadoAvatar" alt="imagen1 de" />
        </div>
        <div className="col-6 col-md-4 col-lg-8">
          <div className="card-body">
            <h3 className="card-text">{nombre1}</h3>
            <div className="d-flex">
              <p className="card-text mx-2 mx-md-4">{tipo1}</p>
              <Button variant="info" className="text-white">
                {negocio1}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoList;
