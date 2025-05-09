import { Logger } from 'tslog';
    
const log: Logger<Record<string, unknown>> = new Logger({ name: "My App" });

export default log;