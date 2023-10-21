let basUrl="http://localhost:8081/Back_End_war/"


var regExUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExFullName = /^[A-Z|a-z\s]{3,20}$/;
var regExContact = /^(071|077|075|078|076)[0-9]{7}$/;
var regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
var regExEmail = /^[0-9A-Z a-z$&#]{3,10}(@gmail.com)|/;
var regExNIC = /^[0-9]{9}$/;
var regExDrivingLNO = /^[1-9]{1,10}$/;


$("#nameSignIn").keyup(function (event) {
    let name = $(this).val();
    if (regExFullName.test(name)) {
        $(this).css('border', '2px solid green');
        $("#errorUserName").text("");
        if (event.key == "Enter") {
            $("#emailSignIn").focus();
        }
    } else {
        $(this).css('border', '2px solid red');
        $("#errorUserName").text("Invalid Name Format: Kamal");
    }
});


$("#emailSignIn").keyup(function (event) {
  let email = $(this).val();
  if (regExEmail.test(email)) {
      $(this).css('border', '2px solid green');
      $("#errorEmail").text("");
      if (event.key == "Enter") {
          $("#nicSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorEmail").text("Invalid Email Format:");
  }
});


$("#nicSignIn").keyup(function (event) {
  let nic = $(this).val();
  if (regExNIC.test(nic)) {
      $(this).css('border', '2px solid green');
      $("#errorNIC").text("");
      if (event.key == "Enter") {
          $("#addressSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorNIC").text("Invalid NIC Format:");
  }
});


$("#addressSignIn").keyup(function (event) {
let address = $(this).val();
  if (regExAddress.test(address)) {
      $(this).css('border', '2px solid green');
      $("#errorAddress").text("");
      if (event.key == "Enter") {
          $("#contactSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorAddress").text("Invalid Address Format:");
  }
});

$("#contactSignIn").keyup(function (event) {
let contact = $(this).val();
  if (regExContact.test(contact)) {
      $(this).css('border', '2px solid green');
      $("#errorContact").text("");
      if (event.key == "Enter") {
          $("#drivingLicenseSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorContact").text("Invalid Contact Format:");
  }
});


$("#drivingLicenseSignIn").keyup(function (event) {
let drivingLicense = $(this).val();
  if (regExDrivingLNO.test(drivingLicense)) {
      $(this).css('border', '2px solid green');
      $("#errorDriven").text("");
      if (event.key == "Enter") {
          $("#registerUsername").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorDriven").text("Invalid Driving License Format:");
  }
});

$("#registerUsername").keyup(function (event) {
let username = $(this).val();
  if (regExUserName.test(username)) {
      $(this).css('border', '2px solid green');
      $("#errorUsername").text("");
      if (event.key == "Enter") {
          $("#registerPassword").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorUsername").text("Invalid Username Format:");
  }
});


$("#registerPassword").keyup(function (event) {
let password = $(this).val();
  if (regExPassword.test(password)) {
      $(this).css('border', '2px solid green');
      $("#errorPassword").text("");
      if (event.key == "Enter") {
          $("#btnSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorPassword").text("Invalid Password Format:");
  }
});

function generateCustomerId() {
  $("#customerId").val("C00-0001");
  var test = "id";

  $.ajax({
    url: basUrl + "customer?test=" + test,
    method: "GET",
    success: function (response) {
      var id = response.data;
      var newId = id.split("-")[1];
      var incId = parseInt(newId) + 1;
      if (incId < 10) {
        $("#customerId").val("C00-000" + incId);
      } else if (incId < 100) {
        $("#customerId").val("C00-00" + incId);
      } else if (incId < 1000) {
        $("#customerId").val("C00-0" + incId);
      } else {
        $("#customerId").val("C00-" + incId);
      }
    },
    error: function (ob,statusText,error) {
      console.log(error);

    }

  });
}


