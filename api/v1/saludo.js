export default function handler(req, res) {
  const { nombre } = req.query;
  res.status(200).json({ saludo: `Hola, ${nombre || "invitado"}!` });
}
