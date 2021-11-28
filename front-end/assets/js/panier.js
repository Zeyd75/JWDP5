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

//Écouter la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validNames(form.nom) &&
    validNames(form.prenom) &&
    validAdresse(form.adresse) &&
    validCodePostal(form.codePostal) &&
    validNames(form.ville) &&
    validEmail(form.email)
  ) {
    form.submit();
  }
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

//Taf Bruno
const storedProducts = localStorage.oribear;
let teddiesArray = [];
if (storedProducts) {
  teddiesArray = JSON.parse(storedProducts);
}

function displayStoredTeddies(teddies) {
  /*let innerHTML = "";
  const basketContent = document.getElementById("basketContent");
  for (let teddy of teddies) {
    let td = document.createElement("td");
    let h3 = document.createElement("h3");
    h3.innerText = teddy.name;
    let p = document.createElement("p");
    p.innerText = teddy.price;
    let img = document.createElement("img");
    img.src = teddy.imageUrl;
    td.appendChild(h3);
    td.appendChild(p);
    td.appendChild(img);
    basketContent.appendChild(td);
  }*/
  let basketDisplay = "";
  for (let teddy of teddies) {
    basketDisplay += `<td class="w-25">
                <img
                src="${teddy.imageUrl}"
                alt="${teddy.name}"
                class="w-25"
              />
              ${teddy.name}
            </td>
            <td>1</td>
            <td>${teddy.price}</td>
            <td>29,00€</td>`;
  }
  document.getElementById("basketContent").innerHTML = basketDisplay + "<br>";
}

displayStoredTeddies(teddiesArray);
