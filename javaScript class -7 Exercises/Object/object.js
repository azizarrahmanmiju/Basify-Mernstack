
let Person = {
    name: "John",
    age: 30,
    height: 180,
    lastname: "Doe",
    nameoutput: function () {
        console.log(this.name + this.lastname)
    }
}

console.log(Person.name);
console.log(Person.age);
Person.nameoutput();
// add Some data In the object
Person.country = "USA"; //or
Person["country"] = "USA";
console.log(Person);