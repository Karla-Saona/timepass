import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
const mensaje = req.query.mensaje ? decodeURIComponent(req.query.mensaje) : "";
const hh = String(req.hora).padStart(2, "0");
const mm = String(req.minutos).padStart(2, "0");

res.send(`
    <h1>Bienvenido/a</h1>
    <p>Hora actual: <b>${hh}:${mm}</b></p>

    ${mensaje ? `<p style="color:red;"><b>${mensaje}</b></p>` : ""}

    <a href="/endroute">
    <button>Ir a endroute</button>
    </a>
`);
});

export default router;
