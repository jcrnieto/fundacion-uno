const nodemailer = require("nodemailer");

 export const emailClient = async (data) => {
    
    
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
          user: "jcrnietos@gmail.com",
          pass: "fvbdmrviatzjjjko", 
        },
      });

      var mailOptions = {
        from: "consultadepaginaweb@gmail.com",
        to: "jcrnietos@gmail.com",
        subject: "consulta de pedido",
        html:`
          <div>
          <p>Nombre: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Telefono: ${data.telefono}</p>
          <p>Dejá tu mensaje: ${data.mensaje}</p>
          </div>
        `
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.status(200).json(req.body);
          console.log("Email enviado");
        }
      });
}

// module.exports = {
//   emailClient
// }