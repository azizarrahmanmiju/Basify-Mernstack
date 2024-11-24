

///===================================================================
/// <summary>
///     All Data Type In JAVASCRIPT
/// </summary>
///===================================================================


// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE SO, In JAVASCRIPT , we don't need to declare the data type of a variable before using it.


// Number =====
const number = 1;   //Number Value 
console.log(number); // Output: 1
console.log(typeof (number)) // Output: number
//=================================================================

// String =====
const string = "MAR miju" //String Value
console.log(string); // Output: MAR miju
console.log(typeof (string)) // Output: string
//===================================================================

//Boolean ====
const boolean = true; //Boolean Value   boolean As Possible true or false
console.log(boolean); // Output: true
console.log(typeof (boolean)) // Output: boolean
//====================================================================
// Null =====
const nullValue = null; //Null Value
console.log(nullValue); // Output: null
console.log(typeof (nullValue)) // Output: object //Null Value Isn't Possible To Get In JavaScript i will Be Must a Empty Object
//====================================================================

//Object======
const Person = {
    name: "MAR miju",
    age: 20,
    address: "Kathmandu",
    occupation: "Software Engineer"
    // name , age, address and occupation  are properties of the object that are known as key and there values are known as value
}
console.log(Person); // Output: { name: 'MAR miju', age: 20,address: "Kathmandu", occupation : "Software Developer",}
console.log(typeof (Person)); // Output: object
console.log(Object.values(Person)); // Output: [ 'MAR miju', 20, 'Kathmandu', 'Software Engineer] 
//================================================================


//Array=====
const array = [1, 2, 3, 4, 5]; //Array
console.log(array); // Output: [1, 2, 3, 4,5]
console.log(typeof (array)); // Output: object
// array is an object in JavaScript
//====================================================


