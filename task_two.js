function prototype(massive) {
    sum = 0
    for (let i = 0; i < massive.length; i++) {
        sum += massive[i]
    }
    return sum / massive.length
}

console.log(prototype([1, 5, 12, 4, 3]))
console.log(prototype([2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(prototype([3, 10, 17]))