$(document).ready(function() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  var limit = 8;
  var offset = 0;
  var isLoading = false;

  function loadArticles() {
    isLoading = true;
    $("#cover-spin").show();
    setTimeout(function() {
      $.ajax({
        url: url + "?_start=" + offset + "&_limit=" + limit,
        method: "GET",
        dataType: "json",
        success: function(data) {
          var container = $(".container");
          $.each(data, function(index, article) {
            var articleTitle = article.title.length > 74 ? article.title.substring(0, 74) + "..." : article.title;
            var articleBody = article.body.length > 100 ? article.body.substring(0, 100) + `<a id="readmore" href="https://w3schools.com"></a>
`     : article.body;
            var articleHtml = `
              <div class="article">
                <img class="lazy" data-src="https://picsum.photos/800/400/?random=${article.id}" alt="">
                <h2 style="font-family: 'Open Sans', sans-serif;">${articleTitle}</h2>
                <p>${articleBody}</p>
              </div>
            `;
            container.append(articleHtml);
          });
          // Initialize lazy loading after appending the articles to the container
          var lazyLoadInstance = new LazyLoad();
          lazyLoadInstance.update();
          isLoading = false;
          $("#cover-spin").hide();
          // Show the "show more" button after the data has been successfully loaded
          $(".button").show();
        },
        error: function() {
          console.log("Error loading articles");
          isLoading = false;
          $("#cover-spin").hide();
        }
      });
    }, 332); // Wait for 1 second before making the AJAX call
  }

  loadArticles();

  $(".button").click(function() {
    if (!isLoading) {
      offset += limit;
      loadArticles();
    }
  });
});
window.onload = function() {
  var footer = document.querySelector(".footer");
  footer.style.display = "none";

  setTimeout(function() {
    footer.style.display = "block";
    setTimeout(function() {
      footer.classList.add("show");
    }, 112);
  }, 1000);
};
window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
var myButton = document.getElementById("myBtn");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
myButton.style.display = "block";
} else {
myButton.style.display = "none";
}
}

    function topFunction() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, currentPosition - currentPosition / 10);
    }
    }


        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector("nav ul");
        const nav = document.querySelector("nav");

        function toggleNav() {
          navLinks.classList.toggle("open");
          nav.classList.toggle("open");
        }

        hamburger.addEventListener("click", toggleNav);

        function closeNav() {
          navLinks.classList.remove("open");
          nav.classList.remove("open");
        }

        window.addEventListener("resize", closeNav);

        // Затвори менито при клик на линк
        navLinks.addEventListener("click", function() {
          closeNav();
        });