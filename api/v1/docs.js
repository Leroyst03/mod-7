import fs from "fs";
import path from "path";
import { serve } from "swagger-ui-dist";

export default function handler(req, res) {
  const indexPath = path.join(serve.getAbsoluteFSPath(), "index.html");
  let html = fs.readFileSync(indexPath, "utf8");

  html = html.replace("https://petstore.swagger.io/v2/swagger.json", "/api.yaml");

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
