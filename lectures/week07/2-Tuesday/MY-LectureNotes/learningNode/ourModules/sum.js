const sum = arr => {
  let sumArr = arr.reduce((prev, curr) => {
     return prev + curr
  }, 0)
  return sumArr
}

const sumAlt = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

const sumAlt2 = arr => {
  let sum = 0
  for (currVal in arr) {
    sum += currVal
  }
  return sum
}

module.exports = sum


const multiply = arr => {
  let product = 0
  for (let i = 0; i < arr.length; i++){
    product *= arr[i]
  }
  return product
}


const product = (arr) =>{
  return arr.reduce((prev, curr)=>{
    return prev * curr;
  }, 1)

}


let math = {
  sum:sum,
  product:product
}

module.exports = math