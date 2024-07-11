//PAgination in the sections

$(document).ready(function() {
    function setupPagination(sectionClass) {
        var itemsPerPage = 3;
        var $section = $(sectionClass);
        var $items = $section.find('.box-work');
        var totalPages = Math.ceil($items.length / itemsPerPage);
        var currentPage = 1;

        function showPage(page) {
            $items.hide();
            $items.slice((page - 1) * itemsPerPage, page * itemsPerPage).show();
            $section.find('.pagination li').removeClass('active');
            $section.find('.pagination li').eq(page).addClass('active');
        }

        $section.find('.pagination .next').click(function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });

        $section.find('.pagination .previous').click(function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        $section.find('.pagination a[data-page]').click(function(e) {
            e.preventDefault();
            currentPage = parseInt($(this).data('page'));
            showPage(currentPage);
        });

        showPage(currentPage);
    }

    // Setup pagination for each section
    setupPagination('#websiteD');
    setupPagination('#softwareD');
    setupPagination('#graphicalD');
});



 // Example of blog data, in practice this could come from an API or a database
 /*const blogData = [
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
document.addEventListener('DOMContentLoaded', renderBlogItems);*/
