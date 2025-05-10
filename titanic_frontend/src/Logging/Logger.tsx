import { Logger } from 'tslog';
    
const log: Logger<Record<string, unknown>> = new Logger({ name: "Titanic Frontend" });

export default log;