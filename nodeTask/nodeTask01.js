// // // var log4js = require("log4js");
// // // var logger = log4js.getLogger();
// // // logger.level = "debug"; // default level is OFF - which means no logs at all.
// // // logger.debug("Some debug messages");

// // // let log4js = require("log4js");
// // // log4js.configure({
// // //     appenders: { cheese: { type: "file", filename: "cheese.log" } },
// // //     categories: { default: { appenders: ["cheese"], level: "debug" } }
// // // });


// log4js.configure({
//   appenders: { 
//     errorMsg: { type: 'file', filename: './nodeTask/error.log' },
//     infoMsg: { type: 'file', filename: './nodeTask/info.log' },
//     debugMsg: { type: 'file', filename: './nodeTask/debug.log' },
//     id: { type: 'id'},
//   },
//   categories: { 
//     default: { 
//       appenders: ['errorMsg'], level: 'error' 
//     },
//     sleek: { 
//       appenders: ['infoMsg'], level: 'info' 
//     },
//     tracer: { 
//       appenders: ['debugMsg'], level: 'debug' 
//     }
//   }
// });

// let nastyLogger = log4js.getLogger('Rohit');
// nastyLogger.error(new Error('This gets logged in? nastly logger'));
// nastyLogger.debug('This will not be logged in nasty logger');
// nastyLogger.info("info ms")


// let sleekLogger = log4js.getLogger('info');
// sleekLogger.info("this is msg");
// // sleekLogger.debug('This will not be logged in sleek logger');

// let tracerLogger = log4js.getLogger('tracer');
// tracerLogger.info('This will be logged in tracer logger');
// tracerLogger.debug('This will also be logged in tracer logger');

let {callLogger} = require('./long4jsConfig') 
callLogger("Rohit",1212,)
// loggerTemp("Welcome to log4js",1121,"Working properly")
