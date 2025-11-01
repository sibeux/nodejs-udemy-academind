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

const hobbies = ["sports", "cooking"];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map((hobby) => "hobby: " + hobby));
console.log(hobbies);
// ini boleh karena cuma edit isinya, bukan variable-nya.
// Ex: mengganti isi toples, bukan mengganti toples.
hobbies.push("gaming");
console.log(hobbies);
// hobbies = [1] // ini dilarang, karena mengganti toples.
// ? spread & rest operator
// spread
const copiedArray1 = hobbies.slice();
const copiedArray2 = [...hobbies];
const copiedPerson = { ...person };
console.log(copiedArray1);
console.log(copiedArray2);
console.log(copiedPerson);
// rest
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4));
