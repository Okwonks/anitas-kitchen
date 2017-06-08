$(document).ready(function() {
  $("button#btn-left").click(function(event) {
    /* Open when someone clicks on the span element */
    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  });
});
