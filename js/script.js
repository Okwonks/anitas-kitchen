$(document).ready(function() {
  $("form#subscribe").submit(function() {
    var email = $("input#input").val();

    alert(email + " " + "has successfully been added to our email list. Thank you for subscribing!")
  })

  $("a#click-link").click(function() {
    alert("Join us from 5-7 for happy hour!")
  })
  $("a#click-link2").click(function() {
    alert("Come one come all to our weekend parties!")
  })
})
