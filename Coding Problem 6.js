//Coding Problem 6: The Grocery List:
let createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList.toLowerCase() === "y") {
    let itemCount = Number(prompt(" Add more to the grocery list?"));

    let groceryList = [];
    
    for (let i = 0; i < itemCount; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        groceryList.push(item); // Add each item to the array
    }
    let groceryList_Sort = [...groceryList].sort();
    let groceryList_Reverse = [...groceryList].reverse();
    
    alert(`Original List: ${groceryList.join(", ")}\nSorted List: ${groceryList_Sort.join(", ")}\nReversed List: ${groceryList_Reverse.join(", ")}`);
} else {
    alert("You chose not to create a grocery list. Goodbye!");
}
