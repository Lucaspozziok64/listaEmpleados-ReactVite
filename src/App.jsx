import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";
import empleado1 from "./img/empleado-01.jpg"
import empleado2 from "./img/empleado-02.jpg"
import empleado3 from "./img/empleado-03.png"
import empleado4 from "./img/empleado-04.jpg"
import empleado5 from "./img/empleado-05.png"
import empleado6 from "./img/empleado-06.png"
import empleado7 from "./img/empleado-07.png"
import empleado8 from "./img/empleado-08.jpg"
import empleado9 from "./img/empleado-09.png"




function App() {
  const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: empleado1 },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: empleado2 },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: empleado3 },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: empleado4 },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: empleado5 },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: empleado6 },
  {id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: empleado7 },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: empleado8 },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: empleado9 },
];

  return (
    <>
    <main className="container my-2">
      <h3 className="text-center mb-0 text-white">Lista Empleados</h3>
      <div className="my-3 contenedorEmpleados" style={{ maxWidth: "600px", margin: "2rem auto", border: "2px solid blue", padding: "5px" }}>
        <EmpleadoList empleados={empleados} />
      </div>
    </main>
    <footer className="bg-black text-center text-white">
      <p className="mb-0">&copy;Todos los derechos reservados</p>
      <p className="mb-0">Desarrollado por <a href="https://github.com/Lucaspozziok64http://">Lucas Figueroa</a>👨‍💻</p>
    </footer>
    </>
  );
}

export default App;
