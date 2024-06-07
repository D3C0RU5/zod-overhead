import express, { json } from "express";
import { controller } from "./presentation/controller";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());

app.get("/api", controller);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
