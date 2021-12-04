let form = document.querySelector("#loginForm");

//Écouter la modification des champs du formulaire
form.nom.addEventListener("change", function () {
  validNames(this);
});

form.prenom.addEventListener("change", function () {
  validNames(this);
});

form.adresse.addEventListener("change", function () {
  validAdresse(this);
});

form.codePostal.addEventListener("change", function () {
  validCodePostal(this);
});

form.ville.addEventListener("change", function () {
  validNames(this);
});

form.email.addEventListener("change", function () {
  validEmail(this);
});

// ---------- VALIDATION DE NOM, PRÉNOM, VILLE ----------
const validNames = function (inputNames) {
  let namesRegex = new RegExp(
    "^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð. '-]+)$"
  );

  let small = inputNames.nextElementSibling;

  if (namesRegex.test(inputNames.value)) {
    small.innerHTML = "Entrée valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Entrée non valide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ---------- VALIDATION DE L'ADRESSE ----------
const validAdresse = function (inputAdresse) {
  let adresseRegex = new RegExp(
    "^([A-Za-z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,. '-]+)$"
  );

  let small = inputAdresse.nextElementSibling;

  if (adresseRegex.test(inputAdresse.value)) {
    small.innerHTML = "Adresse valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Adresse non valide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ---------- VALIDATION DU CODE POSTAL ----------
const validCodePostal = function (inputCodePostal) {
  let codePostalRegex = new RegExp("^([A-Za-z0-9 -]{1,10})$");

  let small = inputCodePostal.nextElementSibling;

  if (codePostalRegex.test(inputCodePostal.value)) {
    small.innerHTML = "Code postal valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Code postal non valide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ---------- VALIDATION DE L'EMAIL ----------
const validEmail = function (inputEmail) {
  //Création de la regex pour validation email
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  //Récupération de la balise small du HTML
  let small = inputEmail.nextElementSibling;

  //Test de la regex
  if (emailRegex.test(inputEmail.value)) {
    small.innerHTML = "Email valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Email non valide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};
//Récupération des produits mis dans le panier
const storedProducts = localStorage.oribear;
let teddiesArray = [];
if (storedProducts) {
  teddiesArray = JSON.parse(storedProducts);
}

//Modification du h2 si au moins un produit est stocké et apparition d'un boutton pour vider le panier
let basketTitle = document.getElementById("basketTitle");
if (storedProducts != null) {
  basketTitle.innerText = "Votre panier contient :";
  let emptyDiv = document.createElement("div");
  let emptyDivContent = `<button id='emptyButton'>Vider le panier</button>`;
  emptyDiv.innerHTML = emptyDivContent;
  document.getElementById("blocPanier").appendChild(emptyDiv);
  displayStoredTeddies(teddiesArray);
} else {
  basketTitle.innerText = "Votre panier est vide.";
}

//Affichage de produits mis dans le panier
function displayStoredTeddies(teddies) {
  console.log(teddies);
  let basketDisplay = "";
  let totalAmount = 0;
  for (let teddy of teddies) {
    const subtotal = teddy.quantity * teddy.price;
    totalAmount += subtotal;
    basketDisplay += `<tr><td class="w-25">
                <img
                src="${teddy.imageUrl}"
                alt="${teddy.name}"
                class="w-100"
              />
              ${teddy.name}
            </td>
            <td class="text-center align-middle">${teddy.quantity}</td>
            <td class="text-center align-middle">${(teddy.price / 100).toFixed(
              2
            )}€</td>
            <td class="text-center align-middle">${(subtotal / 100).toFixed(
              2
            )}€</td></tr>`;
  }
  document.getElementById("basketContent").innerHTML += basketDisplay;
  document.getElementById(
    "basketContent"
  ).innerHTML += `<tr><td colspan="4" class="text-right"><strong>Total : ${(
    totalAmount / 100
  ).toFixed(2)}€</strong></td></tr>`;
  localStorage.setItem("bill", totalAmount);
}

//Activation du bouton permettant de vider le panier
let emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "panier.html";
});

//Envoi des données du formulaire
const validate = document.getElementById("validate");
validate.addEventListener("click", (event) => {
  //Création de l'objet utilisateur
  let contact = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    address: document.getElementById("address").value,
    postalCode: document.getElementById("postalCode").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };
  //Vérification des données du formulaire
  if (
    validNames(document.getElementById("lastName")) &&
    validNames(document.getElementById("firstName")) &&
    validAdresse(document.getElementById("address")) &&
    validCodePostal(document.getElementById("postalCode")) &&
    validNames(document.getElementById("city")) &&
    validEmail(document.getElementById("email"))
  ) {
    event.preventDefault();
    let products = teddiesArray.map((teddy) => {
      return teddy.id;
    });

    //Envoi données user via method post
    let sendForm = fetch("http://localhost:3000/api/teddies/order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact, products }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("validate", JSON.stringify(data));
        localStorage.removeItem("oribear");
        document.location = "validation.html?orderId=" + data.orderId;
      })
      .catch((error) => console.log("error: " + error));
  } else {
    console.log(
      validNames(document.getElementById("lastName")),
      validNames(document.getElementById("firstName")),
      validAdresse(document.getElementById("address")),
      validCodePostal(document.getElementById("postalCode")),
      validNames(document.getElementById("city")),
      validEmail(document.getElementById("email"))
    );
    alert("Veuillez fournir des données valides pour finaliser votre achat");
    return false;
  }
});
