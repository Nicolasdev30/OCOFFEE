import datamapper from "../datamapper/datamapper.js";
import nodemailer from "nodemailer";
import "dotenv/config";

const controller = {
  getHomePage: async (_, res) => {
    try {
      const coffeeProducts = await datamapper.findLatestsCoffeeProducts(3);
      res.render("home", { page: "home", coffeeProducts });
    } catch (err) {
      res.status(500).render("error", {
        status: 500,
        message: err.message,
        page: "error",
      });
    }
  },
  getAboutPage: async (_, res) => {
    res.render("about-shop", { page: "about-shop" });
  },
  sendContactMail: async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_APP_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    try {
      // Send the message to ocoffee from the user
      const info = await transporter.sendMail({
        from: `"${req.body.name}" <${req.body.email}>`,
        to: process.env.GOOGLE_APP_USER,
        subject: `${req.body.subject} `,
        text: `${req.body.message}`, // plain‑text body
      });
      console.log("Message sent:", info.messageId);

      // Send auto-confirmation mail to the user
      await transporter.sendMail({
        from: `"Ocoffee" <${process.env.GOOGLE_APP_USER}>`,
        to: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: `<div style="font-family: system-ui, sans-serif, Arial; font-size: 16px">
                <p style="padding-top: 16px; border-top: 1px solid #eaeaea">Bonjour <b>${req.body.name}</b>,</p>
                <p>
                  Merci de nous contacter !<br /><br />
                  Nous prenons actuellement connaissance de votre message.<br /><br />
                  Nous vous assurons une réponse sous les plus bref délais.
                </p>
                <p style="padding-top: 16px; border-top: 1px solid #eaeaea">
                  Cordialement,<br />Jean et Jacques Pepper. 
                </p>
              </div>`,
      });
      console.log("Confirmation message sent:", info.messageId);
    } catch (error) {
      console.log("Erreur:", error);
      res.redirect("/");
    }

    res.redirect("/");
  },
};

export default controller;
