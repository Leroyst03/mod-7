import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const uri = process.env.URL;
const secret = process.env.FIRMA;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("test");

    const usuario = await db.collection("usuarios").findOne({ correo : email });

    if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" });

    const token = jwt.sign({ correo: usuario.correo, nombre: usuario.nombre }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("Error en login:", err);
    res.status(500).json({ error: "Error interno del servidor", message: err.message});
  }
}
