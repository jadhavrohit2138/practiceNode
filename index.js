// import {encode, decode} from 'node-base64-image';

// var str = "E n2g l5ish 123"
// var abc = str.split('').filter(char => /[a-zA-Z]/.test(char)).join("");

// const { isWindows } = require("nodemon/lib/utils")

// // // // // console.log(abc)
// const regex = {
//     // mobile_number: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     mobile_number: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     // dob: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
//     // dob: /^\d{2}-\d{2}-\d{4}$/,
//     // dob:/(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)/,
//     dob:/^(0?[1-9]|[12][0-9]|3[01])\-(0?[1-9]|1[012])\-(19|20)\d\d$/,
//     // dob:/^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/, working
//     // dob:/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g,
//     pan: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
//     ifsc: /^[A-Z]{4}[0]{1}[a-zA-Z0-9]{6}$/,
//     aadhaar: /^[0-9]{12}$/,
//     gstin: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
//     pincode: /^\d{6}$/,
//     name: /^[a-zA-Z\s]+$/,
//     emailId: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// }

// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//   console.log( "Happy Birthday!")
// }
// let a = "rj@gmail.com"
// console.log(a.match(regex.emailId))
// let a="SBIN0005943"
// if(a.match(regex.ifsc))
// {
//     console.log("True")
// }
// else{
//     console.log("No")
// }




// let a="8108604040"
// a.match(regex.mobile_number).length
// console.log(a.match(regex.mobile_number))
// if( a.match(regex.mobile_number)){
//     console.log("yesss")
// }
// else{
//     console.log("noooo")
// }
// b=a.split(/^[a-zA-Z\s]+$/).filter(a.length-1).join("")

// b = a.split(' ').filter(char => .test(char)).join(" ")
// b= a.split(" ").filter(i=>a.indexOf(i)<(a.length-1))
// console.log(b.length-1)
// b = a.split(' ').filter(i=>a.indexOf(i)!=(a.length-1))
// console.log(a.lastIndexOf("f"))
// b = a.split(' ').filter(char => /[a-zA-Z]/.test(char)).join(" ")
// b=a.match(/\w+\s/g).join("") // working condition one with char and number only
// b= a.split(" ")>> b.pop(b.lenght) // 2 but fail

// fully working

// 1
// let a = "Rohit Rohit Rohit patil";
// let b = a.slice(0,a.lastIndexOf(" ")) // fast working
// console.log(b)
// let a = "Rohit Rohit Rohit patil 43553"// slow working
// let op = a.split(" ")
// let cp = op.slice(0, op.length-1).join(' ')
// console.log(cp)

// 2 with regEx
// let a = "Rohit patil a 5 y"
// let op = a.split(/\W+/)  
// let cp = op.slice(0, op.length-1).join(' ')
// console.log(cp)
// // console.log(op)

// 3 
// let b = a.split(" ")
// console.log(b)
// console.log(b.length)
// let c = b.filter(i => b.indexOf(i) < (b.length) - 1).join(" ")
// console.log(c)

// let a = "Rohit is a dog Rohit"
// let sampleArray = a.split(" ")

// console.log(sampleArray);


// sampleArray.forEach(element => {
//     console.log(sampleArray.indexOf(element));
// });

// let resultArray = sampleArray.filter(x=> sampleArray.indexOf(x) < (sampleArray.length)-1)

// console.log(resultArray);

// let a ="whatsapp:918169387750"
// let b = a.replace("whatsapp","number") // to replace current string to new string
// let b = a.substring(11,21) // convert into small string -> substring(starting point ending point)
// console.log(b)

// let customer={}
// customer.mobile_number="8169387750"
// context.simpledb.roomleveldata.customer=customer

// let business ={}
// business.business_type="PROPRIETOR"
// context.simpledb.roomleveldata.business=business


// let = 'SGVsbG8gV29ybGQh'

// // Define the string
// var encodedStringAtoB = '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyAK8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uH…BkiyMDfhQ6n5c9OQrZ+gIJ4rmCOeCVJYZVDxyRsGV1IyCCOCCO9VV6NbFVejWxJRRRWRkFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeceLvCPiGDxdH4v8ACEkP23y1S6tJHK/aMEDudpUqBkZXGwEHceMi88KeO/iBqFqnisW2k6VbMGaC2kBMhOcsoDP82MLljgA5APzA+vUVam0Q4JkNnaQWFjb2dqnl29vGsUSZJ2qowBk8ngd64HwL4c1qDxhr3iPXrSW1nu/lt42uUmGxm3FcqSflCRqOgx29PRKKgsKqWml6fYT3M9nY2tvNdNvuJIYVRpWyTliBljknk+pq3RQBU1DS9P1aBYNSsbW8hVt6x3MKyKGwRnDAjOCefepLOytNOtEtbG1htbaPOyGCMIi5OTgDgckn8anoouFwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z';

// // Decode the String
// var decodedStringAtoB = atob(encodedStringAtoB);

// console.log(decodedStringAtoB);

// function dataURLtoFile(dataurl, filename) {

//     var arr = dataurl.split(','),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]), 
//         n = bstr.length, 
//         u8arr = new Uint8Array(n);

//     while(n--){
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     return new File([u8arr], filename, {type:mime});
// }

// //Usage example:
// var file = dataURLtoFile('data:text/plain;base64,aGVsbG8gd29ybGQ=','hello.txt');
// console.log(file);

// let proImage = new Image();
// proImage.src = 'data:image/png;base64,kiDinsil...';
// console.log(proImage);
// const base64 = require('node-base64-image');
// const {decode,encode} = require('node-base64-image');
// const base64 = require('node-base64-image');
// var base64Img = require('base64-img');
// var base64ToImage = require('base64-to-image');



// var url = '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyAK8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uH…A1i4ishP5/lvM4CnfIsi5boMpzyR6deK9lry7x1HdTeIXOo+BH1uzVVSyubSWRJAu0FxJ5e4kbiduQMc4zk0TVkrdCJdzn/E2u2GvfGDQpdOl86G2uLa3aUfddhMSSp7j5sZ74OMjBPuNeO6F4a1TxF4x0rU5vD76Do2lKiQwMSr5jO9R8w3MS7ZLYAIzzu5PsVOnfVsUQooorQoKKKKACiiigAooooAKKKKACiiigAooooApf2Npf9qf2p/Ztn/aH/P35C+b93b9/Gfu8denFFzo2l3l9DfXWm2c93Djyp5YFaRMHI2sRkYJyMd6u0UrIVkMmjaWCSNJXhZ1KiRACyEjqNwIyOvII9jWB4W8Gad4S+3PZz3lzcX0oluLi8l8yRyM4yQAOrMc4ySxyTxjoqKLLcYUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==';
// // var base64Str = "Add valid base64 str";
// var path ='C:/Users/rohit.jadhav/Desktop/temp_bot/prcticeSplit';
// var optionalObj = {'fileName': 'imageFileName', 'type':'png'};

//     base64ToImage(url,path,optionalObj); 

// // Note base64ToImage function returns imageInfo which is an object with imageType and fileName.
// var imageInfo = base64ToImage(url,path,optionalObj); 

// function temp001(req,res){
// var base64Data = url.replace(/^data:image\/png;base64,/, "");

// require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
// console.log(err);
// });
// }
// temp001()

// const getAge = require('age-by-birthdate')
// console.log(getAge('2/15/1999'))

// let dob = '15-02-1999'
// let temp = dob.split('-').join('')
// console.log(temp)
// console.log(dob.slice(-1,0))

// let date = new Date()
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getFullYear())

// birth date to age

// var year_born ="15-02-1999" ;
// var d = new Date();
// var n = d.getFullYear();
// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// "text": "*Offer Amount* : <offerAmount>\n*Cibil Score* : <cibilScore>\n*EMI Amount* : <emiAmount>\n*ROI* : <roi>\n*Tenor* : <tenor>",


//name format set
// let name01 = "Rohit Vijay Jadhav"
// let temp = name01.split(' ').length
// console.log(temp)
// if(temp != 3){
//   console.log("fails")
// }
// let fname = temp[0]
// let sname = temp[2]
// console.log(fname)
// console.log(sname)

// let fullname = "Rohit Vijay JAdhav"
// let temp = fullname.split(' ')
// console.log(temp.length)
// console.log(fullname.length)

// let var1 = "300000" - "1000"
// // console.log(var1)
// function getAge(str) {
//   let splitBirthDate = str.split('-')
//   let reverseBirthdate = splitBirthDate.reverse()
//   if(reverseBirthdate[0]%4 == 0){
//     let joinBirthDate = reverseBirthdate.join("-")
//     var ageInMilliseconds = new Date() - new Date(joinBirthDate);
//     return Math.floor(ageInMilliseconds/1000/60/60/24/366); // convert to year

//   }
//   else{
//     let joinBirthDate = reverseBirthdate.join("-")
//     var ageInMilliseconds = new Date() - new Date(joinBirthDate);
//     return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to year

//   }
// }

// console.log(getAge("15-2-1992"))

//with star
// let num = 5
// let star = ""
// // let list1 = []
// for (let i = 1; i <=num; i++) {

//   for (let j = 1; j <= i; j++) {

//    star = star + `${i} `
//   }
//   console.log(star);
//   star="";

// }
// with number
// let num = 5

// for (let i = 0; i <= num; i++) {

//   for (let j = 0; j <= i; j++) {
//     console.log(i)
//   }
//   console.log("\n")

// }

// with numbers increment
// let num = 5
// let sum = 0
// for (let i = 0; i < num; i++) {

//   for (let j = 0; j < i; j++) {
//     sum = sum + 1
//     console.log(sum)
//   }
//   console.log("\n")

// }

// let n = 4; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     string += `${count} `;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// pyramid
// let str = ""
// end = 4
// // let count = 1
// for (let i = 1; i <= end; i++) {
//     for (let j = 1; j <= end - i; j++) {
//             str = str + "  "
//         }
//     for (let k = 0; k < 2 * i - 1; k++) {
//             str = str + "* "
//     }
//     str += "\n"
// }
// console.log(str)

// armsrong number
// let temp2=1
// let num = 407
// let orignalNum = num
// let sum = 0
// let temp = 0
// let count = 0
// while (num != 0) {
//     // length of the number
//     temp = num % 10
//     num = parseInt(num/10)
//     count ++

// }
// for (let i = 0; i < count; i++) {
//     temp = orignalNum % 10
//     for (let j = 0; j < count; j++) {
//         temp2 *= temp
//     }
//     sum += temp2
//     temp2 = 1
//     orignalNum = parseInt(orignalNum/10)

// }
// console.log(sum)

// function dummy(name,dob) {
//     let obj = new Object()
//     obj.leadDetails = new Object()
//     obj.leadDetails.firstName = name
//     obj.leadDetails.dob = dob
//     return obj
// }

// // console.log(JSON.stringify(dummy("Rj","15-2-1999")))
// let temp = []
// // let lastName
// let fname = "Rohit Vijay Jadhav";
// fname = fname.split(" ")
// fname.map((val) => {
//     if (fname[0] == val) {
//         let firstName = val;
//         console.log("first name is " + firstName)
//     }
//     else {
//         temp.push(val)
//     }
// })
// let call = temp.join(" ")
// // console.log("last name is " + call)

// let dob = "15-02-1999"
// let splitBirthDate = dob.split('-')
// let reverseBirthdate = splitBirthDate.reverse()
// let joinDob = reverseBirthdate.join("-")
// let newName = joinDob.concat("T00:00:00")
// console.log(newName)
// let dob = "15-02-1999"
// let splitBirthDate = dob.split('-').reverse().join("-").concat("T00:00:00")
// console.log(splitBirthDate)
// const log4js = require('log4js');
// function sampleFun() {
// log4js.configure({
//   appenders: { 
//     error: { type: 'file', filename: './nodeTask/error.log' },
//     info: { type: 'file', filename: './nodeTask/info.log' },
//     debug: { type: 'file', filename: './nodeTask/debug.log' },
//   },
//   categories: { 
//     default: { 
//       appenders: ['error'], level: 'error' 
//     },
//     info: { 
//       appenders: ['info'], level: 'info' 
//     },
//     debug: { 
//       appenders: ['debug'], level: 'debug' 
//     }
//   }
// });

// const nastyLogger = log4js.getLogger('error');
// nastyLogger.error(new Error('This gets logged in nastly logger'));
// nastyLogger.debug('This will not be logged in nasty logger');

// const sleekLogger = log4js.getLogger('info');
// sleekLogger.info('This will be logged in sleek logger');
// sleekLogger.debug('This will not be logged in sleek logger');

// const tracerLogger = log4js.getLogger('debug');
// tracerLogger.info('This will be logged in tracer logger');
// tracerLogger.debug('This will also be logged in tracer logger');
// }

// sampleFun()

// let num = "sadas";
if(isNaN("sumer155"))
{
  console.log("right")
}
else{
  console.log("wrong")
}
// console.log(isNaN(02))
// let netMonthlyIncome="3888 ,543, 00 324Inr"
// netMonthlyIncome = netMonthlyIncome.toLowerCase().replaceAll("inr","").replaceAll(" ","").replaceAll(",","")

// console.log(netMonthlyIncome)