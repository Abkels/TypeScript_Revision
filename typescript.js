// const sum = (a: number, b: number) => {
//     return a + b;
// }
// const answer = sum(9,5);
// console.log(answer);
// Datatypes
// Boolean
var isCool = true;
// number
var age = 15;
// String
var eyeColor = 'brown';
var quote = "today is a great day. someone will be ".concat(age, ", today");
//  Array
var pets = ['cats', 'dogs'];
var pets2 = ['parrot', 'peacock'];
// object
var player = {
    name: 'messi',
    club: 'intermiami'
};
var countryInfo = {
    example1: {
        country: 'Nigeria',
        continent: 'Africa'
    }
};
// Null and undefined
var unknown = undefined;
var empty = null;
// Tuple
var basket; //this order can't be changed
basket = ['basketball', 5];
// Enum (enumerable)
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
var sizeName = size[2];
// Any  
var whatever = 'come';
whatever = true;
// Void  --when working with functions that doesnt return anything
var sing = function () {
    console.log('drmfsltd');
};
// Never --a function returning never cannot have a reacheable endpoint. It doeesn't return anything
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robot) {
    console.log('Fight!');
};
var fightRobotArmy2 = function (robots) {
    console.log('Fight!');
};
//Difference btw interfACE AND type
//Interfaces create a new name that we can use everywhere. Types doesnt create a new name
