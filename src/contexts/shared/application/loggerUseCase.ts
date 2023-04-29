import WinstonLogger from "../infrastructure/WinstonLogger";

export class LoggerUseCase {
  private readonly logger: WinstonLogger;

  constructor() {
    this.logger = new WinstonLogger();
  }

  public debug = async (message: string) => {
    this.logger.debug(message);
  };

  public error = async (message: string) => {
    this.logger.error(message);
  };

  public info = async (message: string) => {
    this.logger.info(message);
  };
}
