const bouton = document.getElementById('bouton');
const compteur = document.getElementById('compteur');

let nbClics = localStorage.getItem('nbClics') || 0;

compteur.textContent = nbClics;

bouton.addEventListener('click', () => {
	nbClics++;

	compteur.textContent = nbClics;

	localStorage.setItem('nbClics', nbClics);
});
