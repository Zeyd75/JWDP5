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
});

function displayTeddy(teddy) {

}
