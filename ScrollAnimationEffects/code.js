const articles = [
  $("#art1"),
  $("#art2"),
  $("#art3"),
  $("#art4"),
  $("#op1"),
  $("#op2"),
];

$(document).on("scroll", function () {
  articles.forEach((article) => {
    if (
      $(window).height() + $(document).scrollTop() >
      article.offset().top + article.outerHeight() / 2
    ) {
      if (article.hasClass("active")) {
        return 0;
      }
      article.addClass("active");
    }
  });
  if ($(document).scrollTop() < 100) {
    articles.forEach((article) => article.removeClass("active"));
  }
});
