const blogItems = document.querySelectorAll('.blog-items .equal-height');

let visibleIndexStart = 0;
let visibleIndexEnd = 2; // Les trois premiers items sont initialement visibles

function showNextItems() {
    // Vérifiez si les prochains items dépassent la longueur des blogItems
    if (visibleIndexEnd >= blogItems.length - 1) return;

    // Cacher les items actuellement visibles
    for (let i = visibleIndexStart; i <= visibleIndexEnd; i++) {
        blogItems[i].classList.remove('visible');
        blogItems[i].classList.add('hidden');
    }

    // Mettre à jour les index pour les nouveaux items visibles
    visibleIndexStart += 3;
    visibleIndexEnd += 3;

    // Vérifiez si visibleIndexEnd dépasse la longueur des blogItems
    if (visibleIndexEnd >= blogItems.length) {
        visibleIndexEnd = blogItems.length - 1;
    }

    // Afficher les nouveaux items visibles
    for (let i = visibleIndexStart; i <= visibleIndexEnd; i++) {
        if (blogItems[i]) {
            blogItems[i].classList.remove('hidden');
            blogItems[i].classList.add('visible');
        }
    }
}

function showPreviousItems() {
    // Vérifiez si les items précédents sont inférieurs à zéro
    if (visibleIndexStart <= 0) return;

    // Cacher les items actuellement visibles
    for (let i = visibleIndexStart; i <= visibleIndexEnd; i++) {
        blogItems[i].classList.remove('visible');
        blogItems[i].classList.add('hidden');
    }

    // Mettre à jour les index pour les nouveaux items visibles
    visibleIndexStart -= 3;
    visibleIndexEnd -= 3;

    // Vérifiez si visibleIndexStart descend en dessous de zéro
    if (visibleIndexStart < 0) {
        visibleIndexStart = 0;
        visibleIndexEnd = 2;
    }

    // Afficher les nouveaux items visibles
    for (let i = visibleIndexStart; i <= visibleIndexEnd; i++) {
        if (blogItems[i]) {
            blogItems[i].classList.remove('hidden');
            blogItems[i].classList.add('visible');
        }
    }
}

// Écouteur d'événement pour le bouton Next
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', showNextItems);

// Écouteur d'événement pour le bouton Previous
const prevButton = document.getElementById('prevButton');
prevButton.addEventListener('click', showPreviousItems);
