import EmpleadoAvatar from "./EmpleadoAvatar";

function EmpleadoRow({ empleado, destacado, textoList }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "8px",
        borderBottom: "1px solid #ccc",
        border: destacado ? "3px solid #00796b" : "none",
      }}
    >
      <EmpleadoAvatar
        pic={empleado.pic}
        fullName={empleado.fullName}
        destacado={destacado}
      />
      <div className="w-100">
        <strong className="text-danger">
          {destacado ? "<EmpleadoAvatar</>" : ""}
        </strong>
        <strong className="text-primary d-flex justify-content-end align-items-end">
          {textoList ? "<EmpleadoList</>" : ""}
        </strong>
        <div>
          <strong>{empleado.fullName}</strong>
        </div>
        <div className="d-flex">
          <h6>{empleado.title}</h6>
          <h5
            className="mx-3"
            style={{
              fontStyle: "italic",
              color: "#fff",
              background: "skyblue",
            }}
          >
            {empleado.department}
          </h5>
        </div>
        <div className="d-flex justify-content-end align-items-end">
          <strong className="mb-0 text-success">
            {destacado ? "<EmpleadoRow</>" : ""}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoRow;
