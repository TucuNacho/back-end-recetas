import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    if (!token) {
      return res.status(401).json({ mensaje: "No hay token en la peticion" });
    }
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.Username = payload.Username;
    req.mail = payload.mail;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: "Token no valido", error: error.message });
  }
};

export default verificarJWT;
