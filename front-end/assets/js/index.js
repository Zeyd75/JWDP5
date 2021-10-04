//Utilisation de la méthode fetch pour établir le lien avec l'API
fetch('http://localhost:3000/api/teddies')
  .then(function(response) {
    if(response.ok) {
      return response.json();
    }
  })
  .then(function(data) {
    teddiesDisplay(data);
  })
  .catch(function(error) {
    alert("Connection impossible");
  });

//Fonction permettant d'afficher les produits et leurs caractéristiques
function teddiesDisplay(data) {
  let display = '<div class="row teddy">';
  for (let teddy of data) {
    display += `<div class="col-sm-12 col-lg-4">
                  <a href="#" class="teddyLink">
                    <div class="card">
                        <img class="card-img-top" src="${teddy.imageUrl}" alt="${teddy.name}">
                        <div class="row card-body">
                            <h3 class="card-title col-9">${teddy.name}</h3>
                            <p class="teddyPrice col-3">${teddy.price}</p>
                        </div>
                        <p class="card-test">${teddy.description}</p>
                    </div>
                  </a>
                </div>`;
  }
  display += '</div>';
  document.querySelector('#teddiesList').innerHTML = display;
};

