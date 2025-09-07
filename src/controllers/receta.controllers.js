import Receta from "../models/receta.js";

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();
    res.status(201).json({ mensaje: "la receta fue agregada" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "No se pudo crear la receta. Algo salio mal" });
  }
};

export const leerReceta = async (req, res) => {
  try {
    const obtenerReceta = await Receta.find();
    res.status(200).json(obtenerReceta);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "No se pudo obtener la receta. Algo salio mal" });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    const eliminarReceta = await Receta.findByIdAndDelete(req.params.id);
    if (!eliminarReceta) {
      return res
        .staus(404)
        .json({ mensaje: "No se encontro receta a eliminar" });
    }
    res.status(200).json({ mensaje: "Receta eliminada correctamente" });
  } catch (error) {}
};

export const obtenerRecetaPorId = async (req, res) => {
  try {
    const buscarReceta = await Receta.findById(req.params.id);
    if (!buscarReceta) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro la receta que desea buscar" });
    }
    res.status(200).json(buscarReceta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al buscar la receta" });
  }
};

export const editarReceta = async (req, res) => {
  try {
    const editarRecetas = await Receta.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!editarRecetas) {
      return res.status(404).json({
        mensaje: "No se encontro la receta que desea buscar para editar",
      });
    }
    res.status(200).json({ mensaje: "Producto actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al buscar la receta" });
  }
};
