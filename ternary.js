// A ternary is a short-hand if/else statement.

// It has the form:
// (condition) ? ________: __________: 

const pet = "dog";

// So instead of writing: 
/*let petSound;
if(pet ==="dog") {
    petSound = "woof";
} else {
    petSound = "meow";
} */

// First a slighly better way:

/* let petSound = "meow";
if (pet === "dog") {
    petSound = "woof";
} */


// Now let's use a ternary

const petSound = (pet === "dog") ? "woof" : "meow"; 

// more advanced, nesting ternaries. 
const sound = (pet === "dog")
                    ? "woof"
                    : (pet === "cat")
                            ? "meow"
                            : "chirp"