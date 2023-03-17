import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./contexts/user/infrastructure/route/user.route";

const app = express();

app.use(cors());
app.use(express.json());

const host = "localhost";
const port = process.env.PORT || 3001;

app.use(userRoute);

// const logger = require("contexts/shared/logger");

// Capture 500 errors
app.use((err, req, res, next) => {
  res.status(500).send("Could not perform the calculation!");
  // logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
});

// Capture 404 erors
app.use((req, res, next) => {
  res.status(404).send("PAGE NOT FOUND");
  // logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
});
// Run the server
app.listen(port, () => {
  console.log(`Server started and running on http://${host}:${port}`);
  // logger.info(`Server started and running on http://${host}:${port}`);
});
