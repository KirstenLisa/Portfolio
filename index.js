

function startPage() {
  $('#portfolio').hide();
  $('#aboutText2').hide();
  $('.name').hide();
  $('.name').fadeIn(2000);
  $('#portfolioButton').click(function() {
      showPortfolio();
    })
  $('.portfolioLink').on('click', function() {
    console.log("portfolio nav")
    showPortfolio();
  })
  $('.aboutLink').on('click', function() {
    console.log("about nav");
    showAbout();
  })
}
startPage();


function showPortfolio() {
  $('#portfolio').fadeIn();
  $('html, body').animate({ scrollTop: $("#portfolio").offset().top - (150)}, 1000);
  $('.portfolioLink').addClass('navLinkOpen');
  $('.aboutLink').removeClass('navLinkOpen');
  $('#portfolioButton').hide();
} 

function showAbout() {
  $('#aboutText2').fadeIn();
  $('#aboutHeadline').fadeIn();
  $('html, body').animate({ scrollTop: $("#aboutMe").offset().top - (70)  }, 500);
  $('.aboutLink').addClass('navLinkOpen');
  $('.portfolioLink').removeClass('navLinkOpen');
}


