const express = require("express");
const app = express();
const path = require("path");
const Email = require("./utils/email");
const dotenv = require("dotenv");

const PORT = 3000;

app.use(
  express.urlencoded({
    extended: "false",
  })
);
app.use(express.json());

dotenv.config({ path: "./config.env" });

app.post("/welcomeEmail", (req, res) => {
  const { name, email } = req.body;
  console.log("DATA:", req.body);
  new Email(name, email).sendWelcome();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// app.get("/welcomeEmail", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", welcomeEmail.html));
// });

app.listen(PORT, () => {
  console.log("App running on PORT", PORT);
});
