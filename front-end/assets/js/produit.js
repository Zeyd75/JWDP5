//Récupération id produit
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teddyId = urlParams.get("id");


  fetch(`http://localhost:3000/api/teddies/${teddyId}`)
  .then(function(response) {
    if(response.ok) {
      return response.json();
    }
  })
  .then(function(data) {
    console.log(data);
     // teddiesDisplay(data);
  });
  // .catch(function(error) {
  //   alert("Connection impossible");
  // });

function displayTeddy(teddy) {

}

//fonction qui permet d'afficher les différents vernis
function colorsOptions(data) {
  const dataOption = document.getElementById("productColor");
  for (let color of data.color) {
    dataOption.innerHTML += `<option value="${colors}">${colors}</option>`;
    console.log(color);
  }
}
