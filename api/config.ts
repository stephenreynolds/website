import dotenv from "dotenv";

dotenv.config();

export default {
  isProduction: process.env.NODE_ENV === "production",
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT || 8080)
};