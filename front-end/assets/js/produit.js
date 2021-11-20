//Récupération de l'ID du produit via l'URL
let searchParams = new URLSearchParams(window.location.search);
let teddyId = searchParams.get('id');

//Lien vers l'API en ciblant son ID
fetch(`http://localhost:3000/api/teddies/${teddyId}`)
.then(function(response) {
  if(response.ok) {
    return response.json();
  }
})
.then(function(data) {
  console.log(data);
  let teddy = data;
  teddyDisplay(teddy)
})
.catch(function(error) {
  alert("Connection impossible");
});

//Fonction permettant d'afficher le produit selectionné
function teddyDisplay(teddy) {
  let singleTeddy = '<div class="col-sm-12 col-lg-9">';
  singleTeddy += `<div class="row border shadow">
                    <img src="${teddy.imageUrl}" alt="${teddy.name}" class="col-sm-12 col-lg-6 img-produit">
                    <div class="col-sm-12 col-lg-6 product-bg p-md-5">
                      <div class="row teddyCharacteristics px-md-5 px-lg-3">
                        <h3 class="teddyName col-8">${teddy.name}</h3>
                        <p class="teddyPrice-produit col-4 h3 text-right align-self-center pt-lg-3">${teddy.price / 100},00€</p>
                      </div>
                      <p class="card-test text-center teddyDescription">${teddy.description}</p>
                      <div class="row justify-content-center mt-lg-5 pt-lg-3">
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                          <option selected>Choisissez votre couleur</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="text-right mt-lg-5">
                        <button type="button" class="btn btn-primary">Ajouter au panier</button>
                      </div>
                    </div>
                  </div>`
    singleTeddy += '</div>';
    document.getElementById('singleTeddy').innerHTML = singleTeddy;
}
