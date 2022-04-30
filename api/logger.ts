import * as path from "path";
import winston from "winston";
import config from "./config";

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat
  ),
  exceptionHandlers: [
    new winston.transports.File({ filename: path.resolve(__dirname, "error.log"), level: "error" })
  ]
});

if (process.env.NODE_ENV !== "testing") {
  logger.add(new winston.transports.File({ filename: path.resolve(__dirname, "error.log"), level: "error" }));
  logger.add(new winston.transports.File({ filename: path.resolve(__dirname, "server.log") }));
}

if (!config.isProduction) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        customFormat
      )
    })
  );
}

export default logger;