// const log4js = require('log4js');
// function loggerTemp(msgcontentId, contentId, infoMsg,) {
//   log4js.configure({
//     appenders: { 
//       nasty: { type: 'file', filename: './nodeTask/error.log' },
//       sleek: { type: 'file', filename: './nodeTask/info.log' },
//       tracer: { type: 'file', filename: './nodeTask/debug.log' },
//     },
//     categories: { 
//       default: { 
//         appenders: ['nasty'], level: 'error' 
//       },
//       sleek: { 
//         appenders: ['sleek'], level: 'info' 
//       },
//       tracer: { 
//         appenders: ['tracer'], level: 'trace' 
//       }
//     }
//   });
  
//   let nastyLogger = log4js.getLogger("error");
//   nastyLogger.error(new Error('This gets logged in nastly logger'));
//   nastyLogger.debug('This will not be logged in nasty logger');
  
//   let sleekLogger = log4js.getLogger("info");
//   sleekLogger.info('This will be logged in sleek logger');
//   sleekLogger.debug('This will not be logged in sleek logger');
  
//   let tracerLogger = log4js.getLogger("debug");
//   tracerLogger.info('This will be logged in tracer logger');
//   tracerLogger.debug('This will also be logged in tracer logger');
//     // ? nastyLogger = log4js.getLogger(msgcontentId);
//   // nastyLogger.error("boss")
//   // return nastyLogger
// }

// module.exports = {
//   loggerTemp
// }
const {parse,stringify} = require('yaml')
const fs = require('fs')

// console.log(parse("2.899"))


const file = fs.readFileSync('./nodeTask/dependancy.yaml', 'utf8')
// console.log(parse(file))
let yaml = parse(file)
console.log(yaml.dependancy)
const log4js = require('log4js');
function callLogger(msg,id){
  log4js.configure({
      appenders: {
        multi: yaml.dependancy,
      },
      categories: {
        default: { appenders: ["multi"], level: "debug" },
      },
    })
    const logger = log4js.getLogger("error");
    logger.error(`${msg}$~$${id} error`);
    const otherLogger = log4js.getLogger("debug");
    otherLogger.debug(`${msg}$~$${id} debugger`);
    const infoLogger = log4js.getLogger("info");
    infoLogger.info(`${msg}$~$${id} information`);
  }
  module.exports={
    callLogger
  }