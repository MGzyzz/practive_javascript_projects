const duck = {
    name: 'Дональд',
    color: 'бeлый',
    age: '1',

    toStr() {
        return `${this.name}, ${this.color}, ${this.age} год`
    },

    say() {
        return 'кря кря'
    }
}

console.log(duck.toStr());
console.log(duck.say())