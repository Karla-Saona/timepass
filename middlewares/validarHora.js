export default function validarHora(req, res, next) {
const hora = req.hora;


if (hora >= 12) return next();

const mensaje = "Aún no son las 12 de la mañana";
return res.redirect("/?mensaje=" + encodeURIComponent(mensaje));
}
