import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(rateLimit({
  windowMs: 60 * 100, // 1 minute
  max: 1000
}));
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny", { skip: () => process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production" }));

export default app;