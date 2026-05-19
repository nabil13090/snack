/**
 * Serveur de production pour Hostinger (hébergement Node.js).
 * Sert le site statique généré par Vite (dossier build/).
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "build");

app.use(express.static(DIST, { maxAge: "7d", index: "index.html" }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Snack Du Lion — http://localhost:${PORT}`);
});
