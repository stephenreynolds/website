import app from "./app";
import config from "./config";
import logger from "./logger";

app.listen(config.port, () => {
  const message = `Server listening at ${config.host}:${config.port}`;

  if (config.isProduction) {
    console.log(message);
  }

  logger.info(message);
});