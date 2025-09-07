import Usuario from "../models/userName.js";
import bcrypt from "bcrypt";
export const crearUsuario = async (req, res) => {
  try {
    const {password} = req.body;
    const saltos = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password,saltos)
    const nuevoUser = new Usuario({ Username:req.body.Username,mail:req.body.mail, password:passwordHash});
    await nuevoUser.save();
    res.status(201).json({ mensaje: "El usuario fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear usuario" });
  }
};
export const leerUsuario = async (req, res) => {
  try {
    const listaUser = await Usuario.find();

    res.status(200).json(listaUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los usuarios" });
  }
};
export const leerUserPorId = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json(usuarioBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener usuario" });
  }
};
export const borrarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar usuario" });
  }
};
export const editarUsuario = async (req, res) => {
  try {
    const usuarioModificado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!usuarioModificado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar usuario" });
  }
};
