const http = require('http');
const cowsay= require('cowsay');
const superhero = require('superheroes')

// console.log(superhero.random());

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U '
  })
)

function get_cows (error, cow_names) {
  if (error) {
    console.log(error)
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`)
  }
}

cowsay.list(get_cows)

// let students = [
//   {
//     fName: 'Victoria',
//     city: 'Atlanta'
//   },
//   {
//     fName: 'Andrew',
//     city: 'Atlanta'
//   },
//   {
//     fName: 'Stephen',
//     city: 'Houston'
//   },
//   {
//     fName: 'James',
//     city: 'Austin'
//   },
//   {
//     fName: 'Matt',
//     city: 'Seattle'
//   }
// ]

// const server = http.createServer((request, response) =>{
// //  console.lot(request.url)
//     switch(request.url){

//       case '/':
//       response.setHeader('Content-Type', 'text/html')
//       response.end(`<h1>Hello World</h1>`)
//       break;

//       case '/api':
//       response.setHeader('Content-Type', 'application/json')
//       let studentsJSON = JSON.stringify(students)
//       response.end(studentsJSON)
//       break;

//       default:
//         break;
//       }
// })







// server.listen(3000, ()=>{
//   console.log(`Server is running on port 3000`)
// })