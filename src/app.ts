import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./contexts/user/infrastructure/route/user.route";
import { LoggerUseCase } from "./contexts/shared/application/loggerUseCase";

const app = express();

app.use(cors());
app.use(express.json());

const host = "localhost";
const port = process.env.PORT || 3001;

app.use(userRoute);

const logger = new LoggerUseCase();

// Capture 500 errors
app.use((err, req, res, next) => {
  const errors = err?.errors ? err?.errors.map((e: any) => e.message) : null;
  const errorMessage = err?.message;

  const error = errors || errorMessage || err;

  if (error) {
    logger.error(errors || error || err);
    res.status(500).send(errors || error || err);
  }
});

// Capture 404 erors
app.use((req, res, next) => {
  res.status(404).send("PAGE NOT FOUND");
});

// Run the server
app.listen(port, () => {
  console.log(`Server started and running on http://${host}:${port}`);
});
