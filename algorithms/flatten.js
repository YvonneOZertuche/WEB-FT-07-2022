/**
 ** Without using .flat(), create a function to flatten an array 

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
flatten(exampleArray) //[1,2,3,4,5,6,7,8,9,10]

 */

//[1,2,[3,4, [5,6,7], 8], 9, 10]
//                         | <==
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [3,4, [5,6,7], 8]
//                | <==
// [3, 4, 5, 6, 7, 8 ] 


// [5,6,7] 
//     7|
// [5, 6, 7]

const flatten = (arr) => {
    
    return arr.reduce((acc, val) =>{

        if(Array.isArray(val)){
            return acc.concat(flatten(val))

        } 
        else{
            acc.push(val)
            return acc
        }

    }, [])

}


flatten([1,2,[3,4, [5,6,7], 8], 9, 10])


// const sum = (arr) => {
    
//     return= arr.reduce((acc, val)=>{
//         reutrn acc + val
//     },0)

    
// }

// sum([1, 2, 3, 4])
// //       |
// //   1  3   6 10
