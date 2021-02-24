let input = 'Turpentine and Turtles';
let vowel = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (m=0; m< input.length; m++){
for (n=0; n<vowel.length; n++){
if (input[m] === vowel [n]){
if (input[m] === "e") {
resultArray.push ('ee')
}else if (input[m] === "u"){
resultArray.push ('uu')
}else { resultArray.push (input[m])
}
}
}
}

console.log('Your translation: ' + resultArray.join('').toUpperCase());