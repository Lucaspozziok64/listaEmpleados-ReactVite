import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoRow from "./components/EmpleadoRow.jsx";
import Imagen from "./img/710037-da87b61ce1d5f784fc17276591655557-1024-1024.jpg";
import EmpleadoList from "./components/EmpleadoList.jsx";
import Imagen1 from './img/Steve-Jobs-biografía.jpg'

function App() {
  //Empleados Avatar
  const nombre = "Elon Musk";
  const tipo = "CEO";
  const negocio = "BUSINEESS";

  //Empleados list
  const nombre1 = "Steve Jobs";
  const negocio1 = "CMO";
  const tipo1 = "Marketing";

  return (
    <>
      <main className="container my-2">
        <EmpleadoRow
          nombre={nombre}
          tipo={tipo}
          negocio={negocio}
          imagen={Imagen}
        />
        <h5 className="text-primary text-end">&lt;Empleado List/&gt;</h5>
        <section className="contenedorEmpleadoList">
          <EmpleadoList
            nombre1={nombre1}
            negocio1={negocio1}
            tipo1={tipo1}
            imagen1={Imagen1}
          />
        </section>
      </main>
    </>
  );
}

export default App;
