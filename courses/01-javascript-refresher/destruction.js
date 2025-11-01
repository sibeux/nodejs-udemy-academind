const person = {
    name: "sibe",
    age: 23,
    // Cara 1
    greet: function () {
        console.log("hi, I am " + this.name);
    },
    // Cara 2
    salam() {
        console.log("Halo, aku sibe");
    },
};

// cara lama
const printName = (data) => {
    console.log(data.name);
};
// cara destruktif -> otomatis ambil "key" yang sesuai
const printAge = ({ name, age }) => {
    console.log(name, age);
};
printName(person);
printAge(person);
// by name key
const { name, age } = person;
console.log(name, age);
// by index
const fruits = ["apple", "mango", "grape"];
const [index1, index2] = fruits;
console.log(index2, index1);
