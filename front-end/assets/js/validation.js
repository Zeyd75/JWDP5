const validate = JSON.parse(localStorage.validate);
let bill = localStorage.getItem("bill");
let contact = localStorage.getItem("validate");

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

//Affichage des coordonnées
let contactDetails = document.getElementById("contactDetails");
contactDetails.innerHTML = `<ul class="list-group list-group-flush text-left">
              <li class="list-group-item">Nom : ${validate.contact.lastName}</li>
              <li class="list-group-item">Prénom : ${validate.contact.firstName}</li>
              <li class="list-group-item">Adresse : ${validate.contact.address}</li>
              <li class="list-group-item">Code postal : ${validate.contact.postalCode}</li>
              <li class="list-group-item">Ville : ${validate.contact.city}</li>
              <li class="list-group-item">email : ${validate.contact.email}</li>
            </ul>`;
