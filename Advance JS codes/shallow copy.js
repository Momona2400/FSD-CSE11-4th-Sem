//deep copy 

let user={
    name:"John",
    age:30,
    hobbies:["reading","traveling"],
    address:{
        city:"New York",
        country:"USA"
    }
}

// let usercopy=Object.assign({},user) //shallow copy
// console.log(usercopy) // { name: 'John', age: 30, hobbies: [ 'reading', 'traveling' ], address: { city: 'New York', country: 'USA' } }
// usercopy.name="Doe"

let usercopy={...user} //shallow copy
// console.log(usercopy) // { name: 'John', age: 30, hobbies: [ 'reading', 'traveling' ], address: { city: 'New York', country: 'USA' } }
// usercopy.name="Doe"

usercopy.address.city="Los Angeles"
console.log(user.address.city) // Los Angeles
console.log(user) // { name: 'John', age: 30, hobbies: [ 'reading', 'traveling' ], address: { city: 'Los Angeles', country: 'USA' } }
console.log(usercopy)
// { name: 'John', age: 30, hobbies: [ 'reading', 'traveling' ], address: { city: 'Los Angeles', country: 'USA' } }
