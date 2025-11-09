import express from "express";
import "dotenv/config";
import helmet from "helmet";
import router from "./app/router.js";

// environment variables
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_DOMAIN = process.env.DOMAIN || "http://localhost";

const SERVER_URL = `${SERVER_DOMAIN}:${SERVER_PORT}`;

// create an express application
const app = express();

// security headers with helmet
app.use(helmet());

// serving all files from "integration" folder as static
app.use(express.static("docs/integration"));

// setting view engine as ejs(serving from views folder)
app.set("view engine", "ejs");
app.set("views", "./app/views");

// using middleware urlencoded parser making req.body accessible for form data
app.use(express.urlencoded({ extended: true }));

// router global
app.use(router);

// listening port
app.listen(SERVER_PORT, () =>
  console.log(`🚀 Server is running on ${SERVER_URL}`)
);
