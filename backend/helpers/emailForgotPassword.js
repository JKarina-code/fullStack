import nodemailer from "nodemailer";
 
 const emailForgotPassword = async (data) => {
    let transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    
      const { email, name, token } = data;
    console.log(data)
      //Enviar el email
    
      const info = await transport.sendMail({
        from: "APV - Veterinary Patient Manager",
        to: email,
        subject: "Reset your Password",
        text: "Reset your  Password",
        html: `<p>Hola: ${name}, has solicitado reestablecer tu password.</p>

        <p>Sigue el siguiente enlace para generar un nuevo password:
        <a href="${process.env.FRONTEND_URL}/forgot-pass/${token}">Reestablecer Password</a> </p>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
      });
    
      console.log("Message sent: %s", info.messageId);
    };

    export default emailForgotPassword