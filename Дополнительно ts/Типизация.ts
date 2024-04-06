interface ILogger {
  error(...args: (string | number)[]): void;
  log(...args: (string | number)[]): void;
}

function makeTrip2(logger: ILogger) { //makeTrip2 реализует интерфейс ILogger
  logger.error('Поездка отменяется из-за плохой погоды ⛈');
  logger.log('Поездка состоится! 🔥');
}

class DebugLogger implements ILogger {
  error(...args: (string | number)[]) {
    console.error('DEBUG', ...args);
  }
  log(...args: (string | number)[]) {
    console.log('DEBUG', ...args);
  }
}

const debug = new DebugLogger(); //debug реализует интерфейс ILogger

makeTrip2(debug); //makeTrip2 реализует интерфейс ILogger
