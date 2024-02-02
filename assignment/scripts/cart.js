console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    } else {
        return false;
    }
}
addItem('orange');
addItem('apple');
console.log(addItem('milk'));
addItem('cookies');
addItem('ice cream');
console.log(addItem('pizza'));


function listItems() {
    for(let items of basket) {
        console.log(items);
    }
}

listItems();

function empty() {
    for (let items of basket) {
        basket.splice(items);
    }
}

empty();
console.log(basket);

const maxItems = 5;

function isFull() {
    if (basket.length >= 5) {
        return true;
    } else if (basket.length < 5) {
        return false;
    }
}

console.log(isFull());

function removeItem(item) {
    let index = basket.indexOf(item);
    console.log(index);
    if (index >= 0) {
        basket.splice(basket[index]);
        return item;
    } else {
        return null;
    }
}

removeItem('apple');

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
