let user = {
    name: 'Hermione',
    age: 34,
    magic: true,
    scream: function() {
        console.log('aaaaaah!');
    }
}

console.log(user.name); // Lookup O(1)
user.spell = 'vingardium leviosa'; // Insert O(1);
console.log(user);
console.log(user.scream());

const a = new Map() // allows you to save any data type as the key (VS an object needs a string as a key)
const b = new Set() // stores only the keys, no values