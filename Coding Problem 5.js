//Coding Problem 5: Color Preferences
let favoriteColors = 3;

for (let i = 1; i <= 3; i++) {
    let color = prompt(`Enter color ${i}:`);
    favoriteColors.push(color); // Add the color to the array
    console.log(`Updated Color List: ${favoriteColors}`);
}
let newColor = prompt("Enter an additional color to add:");
favoriteColors.push(newColor);
console.log(`Final Color List: ${favoriteColors}`);

