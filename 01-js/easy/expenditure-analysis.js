/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length == 0) {
    return [];
  }
  let ans = [];

  let categorywiseAmount = {};

  for(let transaction of transactions) {
    const category = transaction.category;
    if(categorywiseAmount[category]) {
      categorywiseAmount[category] += transaction.price;
    } else {
      categorywiseAmount[category] = transaction.price;
    }
  }
  for(let category in categorywiseAmount) {
    ans.push({
      category: category,
      totalSpent: categorywiseAmount[category],
    });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
