var nama = "sibe";
var age = 23;
var hasHobbies = true;

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

console.log(summarizeUser(nama, age, hasHobbies));
