let baseUrlDriver="http://localhost:8081/Back_End_war/";


var regExDriverUsername = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExDriverName = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExDriverAge = /^[1-9]{1,2}$/;
var regExDriverAddress = /^[0-9A-Z a-z,/:]{4,50}$/;


$("#driverUsername").on("keyup", function (event) {
  let driverUsername= $("#driverUsername").val();
  if (regExDriverUsername.test(driverUsername)) {
    $("#driverUsername").css("border", "2px solid green");
    $("#errorDriverUsername").text("");
    if (event.key === "Enter") {
      $("#driverPassword").focus();
    }
  }else {
    $("#driverUsername").css("border", "2px solid red");
    $("#errorDriverUsername").text("Invalid Username");
  }
});


$("#driverPassword").on("keyup", function (event) {
  let driverPassword= $("#driverPassword").val();
  if (regExDriverPassword.test(driverPassword)) {
    $("#driverPassword").css("border", "2px solid green");
    $("#errorDPassword").text("");
    if (event.key === "Enter") {
      $("#driverName").focus();
    }
  }else {
    $("#driverPassword").css("border", "2px solid red");
    $("#errorDPassword").text("Invalid Password");
  }
});


$("#driverName").on("keyup", function (event) {
  let driverName= $("#driverName").val();
  if (regExDriverName.test(driverName)) {
    $("#driverName").css("border", "2px solid green");
    $("#errorDName").text("");
    if (event.key === "Enter") {
      $("#driveAddress").focus();
    }
  }else {
    $("#driverName").css("border", "2px solid red");
    $("#errorDName").text("Invalid Name");
  }
});


$("#driveAddress").on("keyup", function (event) {
  let driveAddress= $("#driveAddress").val();
  if (regExDriverAddress.test(driveAddress)) {
    $("#driveAddress").css("border", "2px solid green");
    $("#errorDAddress").text("");
    if (event.key === "Enter") {
      $("#driverAge").focus();
    }
  }else {
    $("#driveAddress").css("border", "2px solid red");
    $("#errorDAddress").text("Invalid Address");
  }
});


$("#driverAge").on("keyup", function (event) {
  let driverAge= $("#driverAge").val();
  if (regExDriverAge.test(driverAge)) {
    $("#driverAge").css("border", "2px solid green");
    $("#errorDAge").text("");
    if (event.key === "Enter") {
      $("#driverContact").focus();
    }
  }else {
    $("#driverAge").css("border", "2px solid red");
    $("#errorDAge").text("Invalid Age");
  }
});


$("#driverContact").on("keyup", function (event) {
  let driverContact= $("#driverContact").val();
  if (regExDriverContact.test(driverContact)) {
    $("#driverContact").css("border", "2px solid green");
    $("#errorContact").text("");
    if (event.key === "Enter") {
      $("#btnAddNewDriver").focus();
    }
  }else {
    $("#driverContact").css("border", "2px solid red");
    $("#errorDContact").text("Invalid Contact Number");
  }
});