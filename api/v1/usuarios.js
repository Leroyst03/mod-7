import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;

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

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const usuarios = await db.collection("usuarios").find().project({ _id: 0 }).toArray();

  res.status(200).json({ usuarios });
}
