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