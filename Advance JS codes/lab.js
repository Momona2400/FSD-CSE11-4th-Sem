let user =[
    {
    name:"John",
    },
    {
    name:"Doe",
    }
];

let usercopy={...user} //shallow copy

usercopy[0].name="Alice"
console.log(user) // [ { name: 'Alice' }, { name: 'Doe' } ]
console.log(usercopy) // [ { name: 'Alice' }, { name: 'Doe' } ]