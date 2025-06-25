
const EmpleadoAvatar = ({ pic, fullName, destacado }) => {
    return (
      <img src={pic} alt={fullName} style={{ width: destacado ? "100px" : "70px", height: destacado ?  "80px": "64px", borderRadius: destacado ? "0%" : "50%", border: destacado ? "1px solid red" : "1px solid black"}} />
    );
};

export default EmpleadoAvatar;