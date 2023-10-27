let baseUrl="http://localhost:8081/Back_End_war/";


var regDailyRatePrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var regFKmDay = /^[0-9]{1,7}$/;
var regExRegisterNO = /^(R00-)[0-9]{4}$/;
var regPassengers = /^[1-9]{1,2}$/;
var regExtraPrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var regFKmMonth = /^[0-9]{1,7}$/;
var regExDistance = /^[0-9]{1,5}$/;



$("#registrationNo").on("keyup",function (event) {
  let regNo=$("#registrationNo").val();
  if(regExRegisterNO.test(regNo)) {
    $("#registrationNo").css("border", "2px solid green");
    $("#errorRegNo").text("");
    if (event.key === "Enter") {
      $("#noOfPassengers").focus();
    }
  }else {
    $("#registrationNo").css("border", "2px solid red");
    $("#errorRegNo").text("Invalid Registration No");
  }
});


$("#noOfPassengers").on("keyup",function (event) {
  let passengers=$("#noOfPassengers").val();
  if(regPassengers.test(passengers)){
    $("#noOfPassengers").css("border","2px solid green");
    $("#errorPassengers").text("");
    if (event.key === "Enter") {
      $("#dailyRatePrice").focus();
    }
  }else {
    $("#noOfPassengers").css("border","2px solid red");
    $("#errorPassengers").text("Invalid No Of Passengers");
  }
});


$("#dailyRatePrice").on("keyup",function (event) {
  let daliRate=$("#dailyRatePrice").val();
    if(regDailyRatePrice.test(daliRate)){
        $("#dailyRatePrice").css("border","2px solid green");
        $("#errorDailyRate").text("");
        if (event.key === "Enter") {
            $("#extraKmPrice").focus();
        }
    }else {
        $("#dailyRatePrice").css("border","2px solid red");
        $("#errorDailyRate").text("Invalid Daily Rate Price");
    }
});
