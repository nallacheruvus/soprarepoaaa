const cli = require("cli-color");

let arr = ['Mathematics', 'Physics', 'Nuclear Physics', 'Low temperature physics', 'Nuclear physics'];
let itr = arr[Symbol.iterator]();
for (let j = itr.next(); j.done !== true; j = itr.next()) {
    const aa = (cli.red(j.value));
    console.log(aa);
}

let arra = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 55, 5, 55, 5555, 5555, 5555];
let set = new Set(arra);
let sItr = set.values();
for (let j = sItr.next(); j.done !== true; j = sItr.next()) {
    const aa = cli.bgWhiteBright(cli.red(j.value));
    console.log(aa);
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Physics", "Geology", "Geography", "Mechanical Engineering", "Civil Engineering"];
let map = new Map();
for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
}
console.log(map);
console.table((map));