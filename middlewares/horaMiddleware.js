export default function horaMiddleware(req, res, next) {
const now = new Date();
req.hora = now.getHours(); // 0 - 23
req.minutos = now.getMinutes();
next();
}
