//array shallow copy

let arr=[1,2,3,4,5]

let arraycopy=[...arr] //shallow copy

arraycopy[0]=10

console.log(arr) //[ 1, 2, 3, 4, 5 ]
console.log(arraycopy) //[ 10, 2, 3, 4, 5 ]