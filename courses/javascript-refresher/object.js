const person = {
    name: "sibe",
    age: 23,
    // Cara 1
    greet: function () {
        console.log("hi, I am " + this.name);
    },
    // Cara 2
    salam() {
        console.log("halo, aku sibe");
    },
};

person.greet();
person.salam();
