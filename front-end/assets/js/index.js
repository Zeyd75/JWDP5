(() => {
  "use strict";
  //Utilisation de la méthode fetch pour établir le lien avec l'API
  function getApiData() {
    fetch("http://localhost:3000/api/teddies")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
        teddiesDisplay(data);
      })
      .catch(function (error) {
        alert("Connection impossible");
      });
  }

  //Fonction permettant d'afficher les produits et leurs caractéristiques
  function teddiesDisplay(data) {
    let display = '<div class="row teddy">';
    for (let teddy of data) {
      display += `<div class="col-sm-12 col-lg-4">
                  <a href="front-end/produit.html?id=${
                    teddy._id
                  }" class="stretched-link">
                    <div class="card shadow">
                        <img src="${teddy.imageUrl}" alt="${teddy.name}">
                        <div class="row card-body">
                            <h3 class="card-title col-8">${teddy.name}</h3>
                            <p class="teddyPrice col-4 h3 text-center align-self-center">${
                              teddy.price / 100
                            },00€</p>
                        </div>
                        <p class="card-test text-center">${
                          teddy.description
                        }</p>
                    </div>
                  </a>
                </div>`;
    }
    display += "</div>";
    document.querySelector("#teddiesList").innerHTML = display;
  }

  getApiData();
})();
