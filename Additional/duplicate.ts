let arr = [1, 2, 3, 2, 4, 5, 1];

let duplicates = [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];

console.log(duplicates);