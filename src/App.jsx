import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado-01.jpg" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado-02.jpg" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado-03.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado-04.jpg" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado-05.png" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado-06.png" },
  {id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado-07.png" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado-08.jpg" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado-09.png" },
];


  return (
    <>
    <main className="container my-2">
        <div style={{ maxWidth: "600px", margin: "2rem auto", border: "2px solid blue", padding: "5px" }}>
      <EmpleadoList empleados={empleados} />
    </div>
    </main>
    </>
  );
}

export default App;
