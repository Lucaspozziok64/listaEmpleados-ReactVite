import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import EmpleadoRow from "./components/EmpleadoRow.jsx";
import Imagen from './img/710037-da87b61ce1d5f784fc17276591655557-1024-1024.jpg'

function App() {
  const nombre = 'Elon Musk'
  const tipo = 'CEO'
  const negocio = 'BUSINEESS'
  return (
    <>
      <main className="container my-2">
        <EmpleadoRow nombre={nombre} tipo={tipo} negocio={negocio} imagen={Imagen} />
      </main>
    </>
  );
}

export default App;
