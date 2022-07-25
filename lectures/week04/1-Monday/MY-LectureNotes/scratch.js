let month = 9

let numDays = 31

switch(month){
  case 4:
  case 6:
  case 9:
  case 11:
    numDays = 30;
  case 2:
    numDays = 28;
    break;
  default:
    break;     



}

console.log(`This month has ${numDays}`)