

function startPage() {
  $('#portfolio').hide();
  $('#aboutText2').hide();
  $('#hello').hide();
  $('#hello').fadeIn(2000);
  $('.name').hide();
  $('.name').fadeIn(6000);
  $('#portfolioButton').click(function() {
      showPortfolio();
    })
  $('#aboutButton').click(function() {
    showAbout();
  })

  $('.portfolioLink').on('click', function() {
    showPortfolio();
  })

  $('.aboutLink').on('click', function() {
    showAbout();
  })

  $('#hamburger').on('click', function() {
    $(this).toggleClass('checked');
    toggleMenu();
  })
}

$(function () {
  $(window).on("resize", function () {
    const nav = document.getElementById("main-menu");
      if ($(window).width() < 760) {
          $('#navLinks').hide();
          $('#navBarBrand').show();
          $('#hamburger').removeClass('checked');
      } else {
          $('#navLinks').show();
          $('#navBarBrand').show();
          nav.style.backgroundColor = "#dfd7d7ef";
      }
  });
})

startPage();


function showPortfolio() {
  $('#portfolio').fadeIn();
  $('html, body').animate({ scrollTop: $("#portfolio").offset().top - (90)}, 1000);
  $('.portfolioLink').addClass('navLinkOpen');
  $('.aboutLink').removeClass('navLinkOpen');
} 

function showAbout() {
  $('#aboutText2').fadeIn();
  $('#aboutHeadline').fadeIn();
  $('html, body').animate({ scrollTop: $("#aboutMe").offset().top - (80)  }, 500);
  $('.aboutLink').addClass('navLinkOpen');
  $('.portfolioLink').removeClass('navLinkOpen');
}

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  const brand = document.getElementById("navBarBrand");
  const nav = document.getElementById("main-menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
    brand.style.display = "flex";
    nav.style.backgroundColor = "#dfd7d7ef";

  } else {
    menu.style.display = "flex";
    brand.style.display= "none";
    nav.style.backgroundColor = "#2D82B3";
  }
}


