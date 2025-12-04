// Step 1: Variable Data - Global Scope Variables
// Declare a variable in global scope called burgers
let burgers = ['Hamburger', 'Cheeseburger'];

// Declare a variable in global scope called featuredDrink
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
//burger fnctn
function addBurger() {
    // new burger create
    let newBurger = 'Flatburger';
    
    // new burger to burger arry
    burgers.push(newBurger);
}

// Step 3: Variable Declaration and Scope
// if use
if (true) {
    // create add new burger
    let anotherNewBurger = 'Maple Bacon Burger';
    
    // push arry method
    burgers.push(anotherNewBurger);
}

// Write a function named changeFeaturedDrink
function changeFeaturedDrink() {
    // Change the value of the FeaturedDrink  to java shake
    featuredDrink = 'The JavaShake';
}

// refine test
console.log('=== Initial State ===');
console.log('Burgers array:', burgers);
console.log('Number of burgers:', burgers.length);
console.log('Featured Drink:', featuredDrink);
console.log('');

console.log('=== Calling addBurger() ===');
addBurger();
console.log('After addBurger():', burgers);
console.log('Number of burgers:', burgers.length);
console.log('');

console.log('=== Calling changeFeaturedDrink() ===');
changeFeaturedDrink();
console.log('After changeFeaturedDrink():', featuredDrink);
console.log('');

console.log('=== Scope Testing ===');
console.log('Global burgers accessible:', Array.isArray(burgers));
console.log('Global featuredDrink accessible:', typeof featuredDrink === 'string');

console.log('');
console.log('=== Final State ===');
console.log('All burgers:', burgers.join(', '));
console.log('Featured drink:', featuredDrink);

// menu
function displayMenu() {
    console.log('\n========== FLATBURGER MENU ==========');
    console.log(' BURGERS:');
    burgers.forEach((burger, index) => {
        console.log(`  ${index + 1}. ${burger}`);
    });
    console.log(`\n FEATURED DRINK: ${featuredDrink}`);
    console.log('===================================');
}

// disp
displayMenu();