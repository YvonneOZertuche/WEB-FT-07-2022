class Stack {
  constructor(){
    //self (python) = this (javaScript)
    this.arr = []
  }
  peek = () => {
    if(this.arr.length > 0){
      return this.arr[this.arr.length - 1]
    }
    return null
  }

  push = (val) =>{
    this.arr.push(val)
  }

  pop = () =>{
    this.arr.pop()
  }

  length = () => {
    return this.arr.length
  }
}

module.exports = Stack

