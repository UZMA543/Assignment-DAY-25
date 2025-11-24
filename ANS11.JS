const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

function processProducts(products) {
  // Step 1: map() se product names ka array
  const productNames = products.map(product => product.name);

  // Step 2: forEach() se price check aur message log
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames; // agar chahe to names array return bhi kar sakte hain
}

// Function call
processProducts(products);
