const nama = "sibe";
let age = 23;
const hasHobbies = true;

age = 20;

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        "Name is " +
        userName +
        ", age is " +
        userAge +
        ", and the user has hobbies " +
        userHasHobbies
    );
}

const sum = (a, b) => {
    return a + b;
};
const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log(sum(2, 2));
console.log(add(1, 2));
console.log(addOne(2));
console.log(addRandom());

console.log(summarizeUser(nama, age, hasHobbies));
console.log(`Namaku: ${nama}. Umurku: ${age}.`);
