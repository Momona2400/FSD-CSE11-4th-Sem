
let user={
    name:"John",
    age:30,
    address:{
        city:"New York",
        country:"USA"
    }
};

structuredClone(user)

usercopy.address.city="Los Angeles";
console.log(user) // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
console.log(usercopy) // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }