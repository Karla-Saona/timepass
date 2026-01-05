import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
res.send(`
    <h1>Bienvenido/a a la ruta final</h1>
    <p>Estás en: <b>/endroute</b></p>
`);
});

export default router;
