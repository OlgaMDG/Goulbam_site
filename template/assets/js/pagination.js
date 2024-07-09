$(document).ready(function() {
    var itemsPerPage = 3;
    var $items = $('.box-work');
    var totalPages = Math.ceil($items.length / itemsPerPage);
    var currentPage = 1;

    function showPage(page) {
        $items.hide();
        $items.slice((page - 1) * itemsPerPage, page * itemsPerPage).show();
        $('.pagination li').removeClass('active');
        $('.pagination li').eq(page).addClass('active');
    }

    $('#next').click(function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    $('#previous').click(function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    $('.pagination a[data-page]').click(function(e) {
        e.preventDefault();
        currentPage = parseInt($(this).data('page'));
        showPage(currentPage);
    });

    showPage(currentPage);
});





/*
Avec l'affichage des 3 items avec active, visible
$(document).ready(function() {
    var itemsPerPage = 3;
    var $items = $('.item');
    var totalPages = Math.ceil($items.length / itemsPerPage);
    var currentPage = 1;

    function showPage(page) {
        $items.hide();  // Cacher tous les items
        $items.slice((page - 1) * itemsPerPage, page * itemsPerPage).show();  // Afficher les items pour la page spécifiée
        $('.pagination li').removeClass('active');  // Supprimer la classe 'active' de tous les éléments de pagination
        $('.pagination li').eq(page).addClass('active');  // Ajouter la classe 'active' à l'élément de pagination correspondant à la page
    }

    $('#next').click(function(e) {
        e.preventDefault();  // Empêcher le comportement par défaut du lien
        if (currentPage < totalPages) {
            currentPage++;  // Incrémenter le numéro de la page actuelle
            showPage(currentPage);  // Afficher la nouvelle page
        }
    });

    $('#previous').click(function(e) {
        e.preventDefault();  // Empêcher le comportement par défaut du lien
        if (currentPage > 1) {
            currentPage--;  // Décrémenter le numéro de la page actuelle
            showPage(currentPage);  // Afficher la nouvelle page
        }
    });

    $('.pagination a[data-page]').click(function(e) {
        e.preventDefault();  // Empêcher le comportement par défaut du lien
        currentPage = parseInt($(this).data('page'));  // Récupérer le numéro de la page depuis l'attribut 'data-page'
        showPage(currentPage);  // Afficher la nouvelle page
    });

    showPage(currentPage);  // Afficher la première page au chargement
});*/
