const {parse,stringify} = require('yaml')
const fs = require('fs')

// console.log(parse("2.899"))

const file = fs.readFileSync('./YamlInstallation/demo.yaml', 'utf8')
// console.log(parse(file))
let temp = parse(file)
console.log(temp.article.meta.author)
console.log(temp)

// let data = {
//     title: 'Reading and Writing YAML to a File in Node.js/JavaScript',
//     'url path': '/reading-and-writing-yaml-to-a-file-in-node-js-javascript',
//     domain: 'stackabuse.com',
//     port: 443,
//     'is-https': true,
//     meta: {
//         'published-at': 'Nov. 1st, 2019',
//         author: {
//             name: 'Scott Robinson',
//             contact: 'scott@stackabuse.com'
//         },
//         tags: [
//             'javascript', 'node.js', 'web development'
//         ]
//     }
// };

// console.log(stringify(data))