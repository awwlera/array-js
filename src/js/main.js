function listItem(name, amount, isBought, pricePerOne, total) {
    this.name = name;
    this.amount = amount;
    this.isBought = isBought;
    this.pricePerOne = pricePerOne;
    this.total = this.pricePerOne * this.amount;
};

let shoppingList = [];
shoppingList[0] = new listItem('apple', 5, true, 10,);
shoppingList[1] = new listItem('banana', 6, false, 6,);
shoppingList[2] = new listItem('orange', 4, true, 15,);
shoppingList[3] = new listItem('pineapple', 2, false, 20,);

let falseFirst = shoppingList.sort((a, b) => Number(a.isBought) - Number(b.isBought));

console.log(falseFirst);  //shows items with 'false' value first

function boughtItem() {
    let boughtItem = prompt('Enter the item you bought');

    switch (boughtItem) {
        case 'banana':
            shoppingList[0].isBought = true;
            alert(`Marked as "bought.`);
            console.log(shoppingList[0]);
            break;
        case 'pineapple':
            shoppingList[1].isBought = true;
            alert(`Marked as "bought.`);
            console.log(shoppingList[1]);
            break;
        case 'apple':
            alert(`You have alredy bought it.`);
            break;
        case 'orange':
            alert(`You have alredy bought it.`);
        default:
            alert(`You don't have this item on the list.`);
    };
};

boughtItem(); //asks the name of item, if the item is bought - acquires 'true' value, shows default alert if the item is not on the list

let notBought = shoppingList.filter(item => item.isBought === false);

console.log(notBought);  //shows two items which are not bought with 'false' value


let newList = shoppingList.slice(0, 3);
console.log(newList); //removes the last item


newList.push( new listItem('coconut',5,true,30)); 

console.log(newList);  //adds new item 'coconut'


let sumShoppinngList = shoppingList.map(item => item.total).reduce((prev, curr) => prev + curr); 

let sumNewList = newList.map(item => item.total).reduce((prev, curr) => prev + curr); 

console.log(sumShoppinngList);  //186(sum of all items on shoppingList)
console.log(sumNewList);   //276(sum of all items on NewList)

let sumNotBought = notBought.map(item => item.total).reduce((prev, curr) => prev = curr);

console.log(sumNotBought); //shows the sum of not bought items (with 'false' value);

console.log(newList.sort((a, b) => { return a.total - b.total; }));   //shows the items from the lowest price to the highest

console.log(shoppingList.sort((a, b) => { return b.total - a.total; })); //shows the items from the highest price to the lowest
