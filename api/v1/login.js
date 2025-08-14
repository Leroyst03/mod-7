import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

const uri = process.env.URL;
const secret = process.env.FRIMA;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const usuario = await db.collection("usuarios").findOne({ email });

  if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" });

  const token = jwt.sign({ email: usuario.email, nombre: usuario.nombre }, secret, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
}
