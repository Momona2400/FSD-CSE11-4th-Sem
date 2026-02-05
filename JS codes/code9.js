let today = new Date();
let day = today.getDay();
console.log("Today is day number: ", day);

for (let i = 0; i < 7; i++) {
    if (i === day) {
        console.log("It's today!");
    } else {
        console.log("It's not today.");
    }
}