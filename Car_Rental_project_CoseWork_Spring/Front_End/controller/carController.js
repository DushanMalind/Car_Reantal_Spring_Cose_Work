let baseUrl = "http://localhost:8081/Back_End_war/";


var regDailyRatePrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var regFKmDay = /^[0-9]{1,7}$/;
var regExRegisterNO = /^(R00-)[0-9]{4}$/;
var regPassengers = /^[1-9]{1,2}$/;
var regExtraPrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var regFKmMonth = /^[0-9]{1,7}$/;
var regExDistance = /^[0-9]{1,5}$/;


$("#registrationNo").on("keyup", function (event) {
  let regNo = $("#registrationNo").val();
  if (regExRegisterNO.test(regNo)) {
    $("#registrationNo").css("border", "2px solid green");
    $("#errorRegNo").text("");
    if (event.key === "Enter") {
      $("#noOfPassengers").focus();
    }
  } else {
    $("#registrationNo").css("border", "2px solid red");
    $("#errorRegNo").text("Invalid Registration No");
  }
});


$("#noOfPassengers").on("keyup", function (event) {
  let passengers = $("#noOfPassengers").val();
  if (regPassengers.test(passengers)) {
    $("#noOfPassengers").css("border", "2px solid green");
    $("#errorPassengers").text("");
    if (event.key === "Enter") {
      $("#dailyRatePrice").focus();
    }
  } else {
    $("#noOfPassengers").css("border", "2px solid red");
    $("#errorPassengers").text("Invalid No Of Passengers");
  }
});


$("#dailyRatePrice").on("keyup", function (event) {
  let daliRate = $("#dailyRatePrice").val();
  if (regDailyRatePrice.test(daliRate)) {
    $("#dailyRatePrice").css("border", "2px solid green");
    $("#errorDailyRate").text("");
    if (event.key === "Enter") {
      $("#monthlyRatePrice").focus();
    }
  } else {
    $("#dailyRatePrice").css("border", "2px solid red");
    $("#errorDailyRate").text("Invalid Daily Rate Price");
  }
});


$("#monthlyRatePrice").on("keyup", function (event) {
  let monthlyRate = $("#monthlyRatePrice").val();
  if (regDailyRatePrice.test(monthlyRate)) {
    $("#monthlyRatePrice").css("border", "2px solid green");
    $("#errorMonthlyRate").text("");
    if (event.key === "Enter") {
      $("#freeKMPerDay").focus();
    }
  } else {
    $("#monthlyRatePrice").css("border", "2px solid red");
    $("#errorMonthlyRate").text("Invalid Monthly Rate Price");
  }
});


$("#freeKMPerDay").on("keyup", function (event) {
  let freeKm = $("#freeKMPerDay").val();
  if (regFKmDay.test(freeKm)) {
    $("#freeKMPerDay").css("border", "2px solid green");
    $("#errorFreeKm").text("");
    if (event.key === "Enter") {
      $("#freeKMPerMonth").focus();
    }
  } else {
    $("#freeKMPerDay").css("border", "2px solid red");
    $("#errorFreeKm").text("Invalid Free Km Per Day");
  }
});


$("#freeKMPerMonth").on("keyup", function (event) {
  let freeKmMonth = $("#freeKMPerMonth").val();
  if (regFKmMonth.test(freeKmMonth)) {
    $("#freeKMPerMonth").css("border", "2px solid green");
    $("#errorFreeKmMonth").text("");
    if (event.key === "Enter") {
      $("#priceForExtraKM").focus();
    }
  } else {
    $("#freeKMPerMonth").css("border", "2px solid red");
    $("#errorFreeKmMonth").text("Invalid Free Km Per Month");
  }
});


$("#priceForExtraKM").on("keyup", function (event) {
  let priceForExtraKm = $("#priceForExtraKM").val();
  if (regExtraPrice.test(priceForExtraKm)) {
    $("#priceForExtraKM").css("border", "2px solid green");
    $("#errorExtraKm").text("");
    if (event.key === "Enter") {
      $("#totalDistanceTravelled").focus();
    }
  } else {
    $("#priceForExtraKM").css("border", "2px solid red");
    $("#errorExtraKm").text("Invalid Price For Extra Km");
  }
});


$("#totalDistanceTravelled").on("keyup", function (event) {
  let totalDistance = $("#totalDistanceTravelled").val();
  if (regExDistance.test(totalDistance)) {
    $("#totalDistanceTravelled").css("border", "2px solid green");
    $("#errorTotalDistance").text("");
    if (event.key === "Enter") {
      $("#btnAddCar").focus();
    }
  } else {
    $("#totalDistanceTravelled").css("border", "2px solid red");
    $("#errorTotalDistance").text("Invalid Total Distance Travelled");
  }
});


function generateVehicleIds() {
  $("#carId").val("V00-0001");
  var test = "id";

  $.ajax({
    url: baseUrl + "car?test=" + test,
    method: "GET",
    success: function (response) {
      var carId = response.data;
      var tempId = parseInt(carId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#carId").val("V00-000" + tempId);
      } else if (tempId <= 99) {
        $("#carId").val("V00-00" + tempId);
      } else if (tempId <= 999) {
        $("#carId").val("V00-0" + tempId);
      } else {
        $("#carId").val("V00-" + tempId);
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}


function saveCar() {
  var newCarData = {
    carId: $("#carId").val(),
    registrationNo: $("#registrationNo").val(),
    colour: $("#colour option:selected").text(),
    brand: $("#brand option:selected").text(),
    type: $("#type option:selected").text(),
    fuelType: $("#fuelType option:selected").text(),
    transmissionType: $("#transmissionType option:selected").text(),
    noOfPassengers: $("#noOfPassengers").val(),
    freeKmForDay: $("#freeKMPerDay").val(),
    freeKmForMonth: $("#freeKMPerMonth").val(),
    pricePerExtraKM: $("#priceForExtraKM").val(),
    dailyRatePrice: $("#dailyRatePrice").val(),
    monthlyRatePrice: $("#monthlyRatePrice").val(),
    totalDistanceTraveled: $("#totalDistanceTravelled").val(),
    availableOrNot: $("#availableOrNot option:selected").text(),
    damageOrNot: $("#damageOrNot option:selected").text(),
    underMaintainOrNot: $("#underMaintainOrNot option:selected").text(),
    fontViewImage: $('#uploadFrontView')[0].files[0].name,
    backViewImage: $('#uploadBackView')[0].files[0].name,
    sideViewImage: $('#uploadSideView')[0].files[0].name,
    interiorViewImage: $('#uploadInteriorView')[0].files[0].name
  };

  $.ajax({
    url: baseUrl + "car",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(newCarData),
    success: function (response) {
      if (response.code==200){

      }
    }
  });
}
