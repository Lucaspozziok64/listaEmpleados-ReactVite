import EmpleadoRow from "../components/EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div>
      {empleados.map((e, i) => (
        <EmpleadoRow key={e.id} empleado={e} destacado={i === 0} textoList={i === 1} />
      ))}
    </div>
  );
};

export default EmpleadoList;
