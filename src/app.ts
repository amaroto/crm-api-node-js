import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./contexts/user/infrastructure/route/user.route";
import dbInit from "./config/db/mysql";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);

dbInit;

app.listen(port, () => console.log(`Started server port ${port}`));
