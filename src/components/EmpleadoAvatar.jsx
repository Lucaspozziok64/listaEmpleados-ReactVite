
const EmpleadoAvatar = ({ pic, fullName, destacado }) => {
    return (
      <img src={`./img/${pic}`} alt={fullName} style={{ width: 64, height: 64, borderRadius: destacado ? "0%" : "50%", border: destacado ? "1px solid red" : "1px solid black"}} />
    );
};

export default EmpleadoAvatar;