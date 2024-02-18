function filterArray(numbers, value) {
    let filtered = [];
    for (let i = 0; i <= numbers.length; i += 1) {
        if(numbers[i] > value) {
            filtered.push(numbers[i])
        }
    }
    return filtered;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));