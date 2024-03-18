/*Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time.*/

function order_sandwich(...items: string[]): void {
  console.log("you ordered the sanwish with:");
  for (let item of items) {
    console.log(item);
  }
}

order_sandwich("lettuce", "tomato", "cheese");
order_sandwich("ham", "cheese", "mustard", "mayonnaise");
order_sandwich("turkey", "lettuce", "tomato", "cheese", "mayonnaise", "onion");
