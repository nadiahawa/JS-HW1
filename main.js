console.log('hello world')

var num1 = 4;
console.log(num1)
var num2 = 3.1415
console.log(num2)

console.log(typeof num1);
console.log(typeof num2);

var bool1 = true
console.log(bool1, typeof bool1);

var js_arr = [num1, num2, bool1];
console.log(js_arr);


var js_obj = {'a_key': 'a_value'};
console.log(js_obj)

var some_variable;
console.log(some_variable)

console.log('/nhosting example');
console.log(hosted_variable);
var hosted_variable = 'foxes';
console.log(hosted_variable)

hosted_variable = 'artoc fox';
console.log(hosted_variable)

let x = 5;
x = 'redinfed'
console.log(x)

const c = 3.1415;
console.log(c)

let sum1 = 21.5+3
console.log(sum1)

//math operations are available

let roundedPi = Math.round(3.1415)
console.log(roundedPi)
let roundedPiup = Math.ceil(3.1415);
console.log(roundedPiup);
let roundPidown = Math.floor(3.8);
console.log(roundPidown);

let value_to_round = 3.14159
console.log(value_to_round.toFixed(2),  typeof value_to_round.toFixed(2))


let test1 = 4.14 + '4'
console.log(test1)

let test2 = '4' + false
console.log(test2)


let test3 = 4 + false
console.log(test3)

function helloWorld(){
    return 'Hello World'
};

let returned_value = helloWorld();
console.log(returned_value)

let helloWorld2 = function(n){
    return 'hello' + n + '!'
};

let returned_value2 = helloWorld2('Sam');
console.log(returned_value2)


let helloNameArrow = n => {
    return 'Hello,' + n + '1'
};
let returned_value3 = helloNameArrow('Nadia');
console.log(returned_value3);

console.log((function(n){return "hello, " + n + "1"})("jojell"));


let age = 98;
if (age < 18){
    console.log('Child')
} else if (age < 65) {
    console.log('adult')
} else {
    console.log('senior')
}

let color = 'blue';
if (color == 'blue'){
    if (color != 'green'){
        console.log(color)
    }
}

if (color == 'blue' && color != 'green'){
    console.log(color)
}

console.log('4' === 4);

// if (conditional1){
//     code to tun1
// } else if (conditional 1){
//     code to run 2
// }

let age2 = 37;
age2 < 18 ? console.log('Child') : age2 < 65 ? console.log('Adult') : console.log('Senior')


let noneequiv = null;
let undefinedvar;
console.log(noneequiv);
console.log(undefinedvar);
console.log(noneequiv === undefinedvar)





console.log('\nLOOPS:')

let myString = 'nadia hawa';
for (let i = 0; i < myString.length; i++){
    console.log(myString[i])
}

for (let i = 10; i > 0; i--){
    console.log(i)
}

console.log('\n\nWhile loops:')

let n = 1;
while (n<11){
    console.log(n)
    n++;
}

let teststring = 'abc';
for (let i=0; i < teststring.length; i++){
    for(let j=0; j < 4; j++){
        console.log(teststring[i], j)
    }
}

console.log('\n\nDo While:')

while(false){
    console.log('no steps taken')
};

do {
    console.log(' at least one step taken');
} while (false);


let animals = ['laika orrock', 'scotty orrock', 'nadia hawa'];
console.log(animals[0]);

animals[1]  = 'crickets';
console.log(animals)

for (let i=0; i < animals.length; i ++){
    console.log(animals[i])
}

let pointer = 0;
while (pointer < animals.length){
    console.log(animals[pointer])
    pointer++;
}

console.log(animals);
animals.push('ninarino');
console.log(animals);
animals.pop();
console.log(animals)

console.log('\n\n\nsplice');
console.log(animals);
animals.splice(2,1)
console.log(animals)
animals.splice(1,2);
console.log(animals)

let evenIndex = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

const index  = evenIndex.indexOf()

function updateArr(evenIndex , n){
    for (i = 0; i < n; i++) {
        if (i % 2 == 0)
            evenIndex[i] = evenIndex.splice(0,1,'even')
    }
}


// console.log(evenIndevenIndex)
// evenIndex.splice(0,0,)
// console.log(evenIndex)

// evenIndex.splice(0,1,'even')
console.log('\n\nHW LINE')


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let contains = dog_names.some(element => {
  if (dog_string.includes(element)) {
    console.log('Matched dog_name')
    return true;
  }
  console.log('No Matches')
  return false;
});

console.log(contains);


// evenIndex = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// let replacedItem = evenIndex.splice(evenIndex.indexOf('Max'), 1, 'even')
// let 2replacedItem = evenIndex.splice(evenIndex.indexOf('Reboot'), 1, 'even')
// let 4replacedItem = evenIndex.splice(evenIndex.indexOf('Trucks'), 1, 'even')
// let index = evenIndex[i]
// for i in evenIndex
// evenIndex.splice(0,1,'even')
// console.log(evenIndex)
// console.log(2replacedItem)
// console.log(4replacedItem)

var colors=["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
//loop back-words through array when removing items like so:
for (var i = colors.length - 1; i >= 0; i--) {
    if (colors[i] === "Max" || colors[i] === "Reboot" || colors[i] === "Rodger") { 
        colors.splice(i, 1, 'even');
    }
}
console.log(colors)