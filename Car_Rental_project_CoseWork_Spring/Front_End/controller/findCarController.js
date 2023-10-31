let baseURLForReservation = "http://localhost:8081/Back_End_war/";


$("#PName").keyup(function (event) {
  let name = $("#PName").val();
  if (regExFullName.test(name)) {
    $("#PName").css('border', '2px solid #31d2f2');
    if (event.key == "Enter") {
      $("#PContact").focus();
    }
  } else {
    $("#PName").css('border', '2px solid red');
  }
});

