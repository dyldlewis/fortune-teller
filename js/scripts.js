$(document).ready(function() {
  $("#fortune-teller").submit(function(event) {
    event.preventDefault()
    var unluckys = [];
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      var unlucky = $(this).val();
      unluckys.push(unlucky)
    });
    var luckys = [];
    $("input:checkbox[name=lucky-events]:checked").each(function() {
      var lucky = $(this).val();
      luckys.push(lucky)
    });
    if (unluckys.length === 3) {
      $("#results").text("You are very unlucky and need to change your ways!")
    } else if (unluckys.length <=2 ) {
      $("#results").text("Think before you leap!")
    } else if (luckys.length >= 2) {
      $("#results").text("Doing well, keep it up.")
    }
    // console.log(warnings, symptoms, methods)
  });
});
