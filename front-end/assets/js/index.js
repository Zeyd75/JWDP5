fetch("http://localhost:3000/api/teddies")
  .then((product) => product.json())
  .then((product) => {
    console.log(product);
  });