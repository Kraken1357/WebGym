import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método no permitido"
        });
    }
    const { nombre, correo, mensaje } = req.body;
    try {
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["TU_CORREO@ejemplo.com"],
            subject: "Nuevo mensaje desde mi página",
            html: `
                <h2>Nuevo mensaje</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
            `
        });
        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        return res.status(200).json({
            mensaje: "Correo enviado",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error al enviar el correo"
        });
    }
}