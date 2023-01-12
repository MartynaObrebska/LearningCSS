// Portfolio button
$("#goToPortfolioBtn").on("click", function() {
    location.href = "https://github.com/MartynaObrebska";
})

// Nav animations
$('#burger, #close').on("click", function() {
    $('#wrapper, #burger, #close').toggleClass('active')
})

$("#welcome, #features, #portfolio, #slogan, #hobby, #contact").on("click", function() {
    const goToSection = "." + $(this).attr("id");
    $("body, html").animate({
        scrollTop: $(goToSection).offset().top - 50
    });
    $("#wrapper").removeClass("active")
})

// Arrow top
const scrollList = $('#arrow, nav');
$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        scrollList.addClass('active')
    } else {
        scrollList.removeClass('active')
    }
})

$("#arrow").on("click", function() {
    $('body, html').animate({
        scrollTop: 0
    })
})
