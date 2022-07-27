document.addEventListener("DOMContentLoaded", function () {
    $("button").on("mouseover", function () {
        $(this).addClass("btn-hover");
      });
        $("button").on("mouseout", function () {
          $(this).removeClass("btn-hover");
        });
});
