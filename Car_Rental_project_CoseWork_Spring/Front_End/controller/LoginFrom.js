
var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#loginUsername").keyup(function (event) {
  let username = $("#loginUsername").val();
  if (regExLoginUserName.test(username)) {
    $("#loginUsername").css('border', '2px solid #31d2f2');
    if (event.key == "Enter") {
      $("#loginPassword").focus();
    }
    else {
      $("#loginUsername").css('border', '2px solid red');
    }
  }
});


$("#loginPassword").keyup(function (event) {
  let password = $("#loginPassword").val();
  if (regExLoginPassword.test(password)) {
    $("#loginPassword").css('border', '2px solid #31d2f2');

  }
  else {
    $("#loginPassword").css('border', '2px solid red');
  }
});





