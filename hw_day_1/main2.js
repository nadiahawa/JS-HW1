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

var names=["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
//loop back-words through array when removing items like so:
for (var i = colors.length - 1; i >= 0; i--) {
    if (names[i] === "Max" || names[i] === "Reboot" || names[i] === "Rodger") { 
        names.splice(i, 1, 'even');
    }
}
console.log(colors)


// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

// const stringToNumber = function(str){
//   var b = parseInt(str)
//   return b;
// }


// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// function makeNegative(num) {
//   return (-Math.abs(num));
// }
