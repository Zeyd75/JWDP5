let form = document.querySelector('#loginForm');

//Écouter la modification des champs du formulaire
form.nom.addEventListener('change', function() {
    validNames(this);
});

form.prenom.addEventListener('change',function() {
    validNames(this);
});

form.adresse.addEventListener('change',function() {
    validAdresse(this);
});

form.codePostal.addEventListener('change',function() {
    validCodePostal(this);
});

form.ville.addEventListener('change',function() {
    validNames(this);
});

form.email.addEventListener('change',function() {
    validEmail(this);
});

// ---------- VALIDATION DE NOM, PRÉNOM, VILLE ----------
const validNames = function(inputNames) {
    let namesRegex = new RegExp("^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð. '-]+)$");   
    let testNames = namesRegex.test(inputNames.value)
};

// ---------- VALIDATION DE L'ADRESSE ----------
const validAdresse = function(inputAdresse) {
    let adresseRegex = new RegExp("^([A-Za-z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,. '-]+)$");

    let small = inputAdresse.nextElementSibling;

    if(adresseRegex.test(inputAdresse.value)) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = 'Adresse non valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// ---------- VALIDATION DU CODE POSTAL ----------
const validCodePostal = function(inputCodePostal) {
    let codePostalRegex = new RegExp("^([A-Za-z0-9 -]{1,10})$");    

    let small = inputCodePostal.nextElementSibling;

    if(codePostalRegex.test(inputCodePostal.value)) {
        small.innerHTML = 'Code postal valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = 'Code postal non valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// ---------- VALIDATION DE L'EMAIL ----------
const validEmail = function(inputEmail) {
    //Création de la regex pour validation email
    let emailRegex = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", 'g');
    
    //Récupération de la balise small du HTML
    let small = inputEmail.nextElementSibling;

    //Test de la regex
    if(emailRegex.test(inputEmail.value)) {
        small.innerHTML = 'Email valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = 'Email non valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};