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


 // Example of blog data, in practice this could come from an API or a database
 const blogData = [
    {
        thumb: "assets/img/blog/11.jpg",
        title: "Suspicion do departure at extremely he believing",
        description: "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected.",
        authorImg: "assets/img/team/1.jpg",
        author: "Author",
        comments: 5,
        shares: 37,
        date: "2024",
        link: "single.html"
    }
];

// Function to render blog items
function renderBlogItems() {
    const blogList = document.getElementById('blog-list');
    blogData.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'equal-height', 'box-work');

        blogItem.innerHTML = `
            <div class="item">
                <div class="thumb">
                    <a href="${blog.link}"><img src="${blog.thumb}" alt="Thumb"></a>
                </div>
                <div class="info">
                    <div class="content">
                        <div class="date">${blog.date}</div>
                        <h4><a href="${blog.link}">${blog.title}</a></h4>
                        <p>${blog.description}</p>
                        <a href="${blog.link}">Read More <i class="fas fa-angle-right"></i></a>
                    </div>
                    <div class="meta">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="${blog.authorImg}" alt="Author">
                                    <span>${blog.author}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-comments"></i>
                                    <span>${blog.comments}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-share-alt"></i>
                                    <span>${blog.shares}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        blogList.appendChild(blogItem);
    });
}

// Call the function to render blog items on page load
document.addEventListener('DOMContentLoaded', renderBlogItems);
