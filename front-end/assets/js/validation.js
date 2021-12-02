const validate = JSON.parse(localStorage.validate);

//Récupération de l'ID du produit via l'URL
let searchParams = new URLSearchParams(window.location.search);
let teddyId = searchParams.get("orderId");

console.log(validate.orderId);
