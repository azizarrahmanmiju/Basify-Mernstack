
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