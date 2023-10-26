// const sum = (a: number, b: number) => {
//     return a + b;
// }
// const answer = sum(9,5);
// console.log(answer);

// Datatypes
// Boolean
let isCool: boolean = true;

// number
let age: number = 15;

// String
let eyeColor: string = 'brown';
let quote: string = `today is a great day. someone will be ${age}, today`;

//  Array
let pets: string[] = ['cats', 'dogs'];
let pets2: Array<string> = ['parrot', 'peacock']

// object
let player: object = {
    name: 'messi',
    club: 'intermiami'
};

let countryInfo : {} = {
    example1 : {
        country: 'Nigeria',
        continent: 'Africa'
    }
}

// Null and undefined
let unknown : undefined = undefined;
let empty : null = null;

// Tuple
let basket: [string, number]; //this order can't be changed
basket = ['basketball', 5]

// Enum (enumerable)
enum size {small = 1, medium = 2, large = 3}
let sizeName: string = size[2];

// Any  
let whatever: any = 'come';
whatever = true

// Void  --when working with functions that doesnt return anything
let sing = () : void => {
    console.log('drmfsltd')
}

// Never --a function returning never cannot have a reacheable endpoint. It doeesn't return anything
let error = (): never => {
    throw Error('oops')
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robot: RobotArmy) => {
    console.log('Fight!')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('Fight!')
}

// Type
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}
//Difference btw interfACE AND type
//Interfaces create a new name that we can use everywhere. Types doesnt create a new name