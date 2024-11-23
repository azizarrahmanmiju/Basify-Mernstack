
let Person = {
    name: "John",
    age: 30,
    height: 180,
    lastname: "Doe",
    nameoutput: function () {
        console.log(this.name + this.lastname)
    },
    phones: [ //Nested Array In Object
        "012456854", "0214578635"
    ]
}

//Read Object
console.log(Person.name);
console.log(Person.age);
Person.nameoutput();

// add Some data In the object
Person.country = "USA"; //or
Person["country"] = "USA";
console.log(Person);

//Modifie the data in the object
Person.age = 31;
Person.name = "Azizar"; //or
Person["name"] = "Azizar";
console.log(Person);

// read Nested Array In Object
console.log(Person.phones[0]);