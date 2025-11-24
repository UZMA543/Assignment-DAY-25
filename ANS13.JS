const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

function countCategories(list) {
  // reduce se category count object banaye
  const counter = list.reduce((obj, cat) => {
    if(obj[cat]) {
      obj[cat] += 1;
    } else {
      obj[cat] = 1;
    }
    return obj;
  }, {});

  // Object.entries() se array of [category, count] banaye aur sort kare
  const sortedCats = Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .map(pair => pair[0]);

  return { counter, sortedCats };
}

const result = countCategories(categories);
console.log(result.counter);     // { electronics: 2, clothing: 2, toys: 3 }
console.log(result.sortedCats);  // [ "toys", "electronics", "clothing" ]
