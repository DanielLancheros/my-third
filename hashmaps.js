// more efficient than using ifs or switches...
// we can use an object called a hash map for multiple conditions...

const petSounds = {
    "dog": "woof",
    "cat": "meow",
    "bird": "chirp",
    "snake": "hiss",
    "fish": "bubbles",
    "cow": "moo",
    "wolf": "howl",
    "chicken": "cluck"
}

const pet = "bird";

console.log(petSounds[pet]);

// let's use another useful example:

const produce = {
    "apple": { price: 0.79, color: "red", sku: "4056" },
    "orange": { price: 0.99, color: "orange", sku: "3122"},
    "onion": { price: 0.69, color: "white", sku: "7163"},
}

const product = "orange"
const {price,color,sku} = produce[product]

console.log(`${product} is ${color} and costs $${price}.`)

