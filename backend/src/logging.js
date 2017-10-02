import log4js from 'log4js';

export const setupLogging = () => {
  log4js.configure({
    appenders: {
      console: { type: 'console' },
      file: {
        type: 'file',
        filename: 'log/app.log',
      },
    },
    categories: {
      default: {
        appenders: ['file', 'console'],
        level: 'info',
      },
    },
    replaceConsole: true,
  });

  const logger = log4js.getLogger('default');
  console.info = logger.info.bind(logger);
  console.log = logger.info.bind(logger);
  console.warn = logger.warn.bind(logger);
  console.error = logger.error.bind(logger);
};
