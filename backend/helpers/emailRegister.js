import nodemailer from "nodemailer";

//Check account with an email sending with nodemailer
const emailRegister = async (data) => {
  let transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, name, token } = data;
  //Send email

  const info = await transport.sendMail({
    from: "APV - Veterinary Patient Manager",
    to: email,
    subject: "Check your APV account",
    text: "Check your APV account",
    html: `<p>Hello: ${name}, check your APV account.</p>
        <p>Your account is already ready, you just have to check it in the following link:
        <a href="${process.env.FRONTEND_URL}/confirm/${token}">Check Account</a> </p>
        <p>If you did not create this account, you can ignore this message</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);
};

export default emailRegister;
