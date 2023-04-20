var bouton = document.getElementById("ajouterImage");
var conteneur = document.getElementById("conteneur");

bouton.addEventListener("click", function() {
    var image = document.createElement("img");
    image.src = "chemin/de/limage.jpg";
    conteneur.appendChild(image);
});
