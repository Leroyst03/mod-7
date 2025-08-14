import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "api.yaml");
  const yaml = fs.readFileSync(filePath, "utf8");

  res.setHeader("Content-Type", "text/yaml");
  res.status(200).send(yaml);
}
