const validate = JSON.parse(localStorage.validate);
let bill = localStorage.getItem("totalCommande");

//Récupération de l'ID du produit via l'URL
let searchParams = new URLSearchParams(window.location.search);
let orderId = searchParams.get("orderId");

//Affichage du numéro de commande
let p = document.createElement("p");
document.getElementById("confirmation").appendChild(p);
p.innerText = "Votre numéro de commande : " + orderId;

//Affichage du montant total de la facture
let p2 = document.createElement("p");
document.getElementById("confirmation").appendChild(p2);
p2.innerText = "Montant total de la facture : " + (bill / 100).toFixed(2) + "€";
