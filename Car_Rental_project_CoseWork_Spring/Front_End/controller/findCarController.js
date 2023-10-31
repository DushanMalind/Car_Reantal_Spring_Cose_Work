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


$("#PContact").keyup(function (event) {
  let contact = $("#PContact").val();
  if (regExContact.test(contact)) {
    $("#PContact").css('border', '2px solid #31d2f2');
    if (event.key == "Enter") {
      $("#PNIC").focus();
    }
  } else {
    $("#PContact").css('border', '2px solid red');
  }
});


$("#PNIC").keyup(function (event) {
  let nic = $("#PNIC").val();
  if (regExNIC.test(nic)) {
    $("#PNIC").css('border', '2px solid #31d2f2');
  } else {
    $("#PNIC").css('border', '2px solid red');
  }
});



$("#noResult").css('display', 'none');
