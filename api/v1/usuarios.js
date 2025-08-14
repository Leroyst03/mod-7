import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const uri = process.env.URL;
const secret = process.env.FRIMA;

export default async function handler(req, res) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = auth.split(" ")[1];
  try {
    jwt.verify(token, secret);
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("test");

    const usuarios = await db.collection("usuarios").find().project({ _id: 0 }).toArray();
    res.status(200).json({ usuarios });
  } catch (err) {
    console.error("Error en usuarios:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
