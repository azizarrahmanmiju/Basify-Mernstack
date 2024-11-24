
const weak = ['Saturday', 'SunDay', 'MonDay', 'TuesDay', 'WedNesDay', 'ThursDay', 'FriDay']

const day = weak[1]; // if you want to get a specific day from the array, you can do so by using the index of array . In this case, we are getting the first element of the array which is 'Saturday'.




switch (day) {
    case weak[0]: console.log(`Today's ${weak[0]}`); break;
    case weak[1]: console.log(`Today's ${weak[1]}`); break;  //output : Today's SunDay //Every time you want to use a variable inside a switch case, you have to use the variable name inside
    case weak[2]: console.log(`Today's ${weak[2]}`); break;
    case weak[3]: console.log(`Today's ${weak[3]}`); break;
    case weak[4]: console.log(`Today's ${weak[4]}`); break;
    case weak[5]: console.log(`Today's ${weak[5]}`); break;
    case weak[6]: console.log(`Today's ${weak[6]}`); break;
    default: console.log('You Are Failer');
}

//Another One == ==

switch (new Date().getDay()) {
    case 0: console.log('Today is Sunday'); break;
    case 1: console.log('Today is Monday'); break;
    case 2: console.log('Today is Tuesday'); break;
    case 3: console.log('Today is Wednesday'); break;
    case 4: console.log('Today is Thursday'); break;
    case 5: console.log('Today is Friday'); break;
    case 6: console.log('Today is Saturday'); break;
    default: console.log('You Are Failer');
}

