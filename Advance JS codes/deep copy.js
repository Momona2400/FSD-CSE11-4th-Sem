//deep copy

let user={
    name:"John",
    age:30,
    address:{
        city:"New York",
        country:"USA"
    }
};
let usercopy=JSON.parse(JSON.stringify(user)) //deep copy

usercopy.address.city="Los Angeles";
console.log(user) // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
console.log(usercopy) // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }