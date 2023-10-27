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
      if (response.code == 200) {
        loadAllCars();
        clearFieldsFromCarPage();
      }
    }
  });
}


function uploadCarImages() {
  var data = new FormData();
  let file = $("#uploadFrontView")[0].files[0];
  let fileName = $("#uploadFrontView")[0].files[0].name;

  data.append("myFile", file, fileName);


  $.ajax({
    url: basUrl + "api/v1/upload",
    method: 'post',
    async: true,
    contentType: false,
    processData: false,
    data: data,
    success: function (resp) {
    },
    error: function (error) {
      console.log(error);
    }
  });
}


function loadAllCars() {
  $.ajax({
    url: baseUrl +"car",
    method: "GET",
    success: function (response) {

      $("#tblCars tbody").empty();
      for (var responseKey of response.data) {
        let raw = `<tr><td> ${responseKey.carId} </td><td>
                            ${responseKey.brand} </td><td>
                            ${responseKey.colour} </td><td>
                            ${responseKey.type} </td><td>
                            ${responseKey.registrationNo} </td><td>
                            ${responseKey.fuelType} </td><td>
                            ${responseKey.transmissionType} </td><td>
                            ${responseKey.noOfPassengers} </td><td>
                            ${responseKey.dailyRatePrice} </td><td>
                            ${responseKey.monthlyRatePrice} </td><td>
                            ${responseKey.freeKmForDay} </td><td>
                            ${responseKey.freeKmForMonth} </td><td>
                            ${responseKey.pricePerExtraKM} </td><td>
                            <span class="badge rounded-pill text-bg-success text-white">${responseKey.availableOrNot}</span></td><td>
                            <span class="badge rounded-pill text-bg-danger text-white">${responseKey.damageOrNot}</span></td><td>
                            <span class="badge rounded-pill text-bg-warning text-secondary">${responseKey.underMaintainOrNot}</span> </td><td>
                            ${responseKey.totalDistanceTraveled} </td><td>
                            <div class="d-flex align-items-center">
                                <img src="http://localhost:8081/Back_End_war/upload/${responseKey.fontViewImage}" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="http://localhost:8081/Back_End_war/upload/${responseKey.backViewImage}" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="http://localhost:8081/Back_End_war/upload/${responseKey.sideViewImage}" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="http://localhost:8081/Back_End_war/upload/${responseKey.interiorViewImage}" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td>
                             <td><button type="button" id="btnEditCar"  class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                <i class="fas fa-pen-alt"></i>
                              </button></td></tr>`;
        $("#tblCars tbody").append(raw);

      }

      /*BindRowClickEvent();*/
      clearFieldsFromCarPage();

    },
    error: function (error) {
      alert(error);
    }
  });
}


$("#btnAddNewCar").click(function () {
  $("#tblCars tbody > tr").off('click');

  /*swal({
    title: "Are you sure? Add Ths Car Details",
    text: "Once Added, You will not be able to recover this Car Details!",
    type: "success",
    showCancelButtonClass: "btn-danger",
    confirmButtonClass: "btn-success",
  });*/

  let text = "Are you sure? Add Ths Car Details";

  /* if (confirm() == true) {*/
  if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
    $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
    $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
    $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
    $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" || $("#availableOrNot option:selected").val() == "") {

    swal({
      title: "Please Fill All Fields",
      text: "message!",
      type: "warning",
      showCancelButtonClass: "btn-primary",
      confirmButtonClass: "btn-danger",
    });
  } else {
    if ($("#errorRegNo").text() != "" || $("#errorPassengers").text() != "" || $("#errorDailyRate").text() != "" || $("#errorMonthlyRate").text() != "" ||
      $("#errorFeeKMDay").text() != "" || $("#errorFreeKMMonth").text() != "" || $("#errorExtraKMPrice").text() != "" || $("#errorTotalDistance").text() != "") {
      alert("Check Input Fields Whether Correct !");
    } else {
      if ($('#uploadFrontView').get(0).files.length === 0 || $('#uploadBackView').get(0).files.length === 0 || $('#uploadSideView').get(0).files.length === 0 || $('#uploadInteriorView').get(0).files.length === 0) {
        alert("No Images Inserted !");
      } else {
        isExistsRegistrationNumber();
        uploadCarImages();

      }
      swal({
        title: "Successfully Register Car Details",
        text: "message!",
        type: "success",
        showCancelButtonClass: "btn-primary",
        confirmButtonClass: "btn-danger",
      });
    }

  }

  /* }*/

});


function isExistsRegistrationNumber() {
  $.ajax({
    url: baseUrl + "car/SEARCH/" + $("#registrationNo").val(),
    method: "GET",
    success: function (response) {
      if (response.data == $("#registrationNo").val()) {
        alert("This Registration Number Already Exists !");
      } else {
        saveCar();

      }

    },
    error: function (error) {
      alert(error);
    }
  });
}


function BindRowClickEvent() {

}

function clearFieldsFromCarPage() {


  $("#registrationNo").val("");
  $("#noOfPassengers").val("");
  $("#freeKMPerDay").val("");
  $("#freeKMPerMonth").val("");
  $("#priceForExtraKM").val("");
  $("#dailyRatePrice").val("");
  $("#monthlyRatePrice").val("");
  $("#totalDistanceTravelled").val("");

  $("#registrationNo").css('border', '1px solid #e9ecef');
  $("#noOfPassengers").css('border', '1px solid #e9ecef');
  $("#freeKMPerDay").css('border', '1px solid #e9ecef');
  $("#freeKMPerMonth").css('border', '1px solid #e9ecef');
  $("#priceForExtraKM").css('border', '1px solid #e9ecef');
  $("#dailyRatePrice").css('border', '1px solid #e9ecef');
  $("#monthlyRatePrice").css('border', '1px solid #e9ecef');
  $("#totalDistanceTravelled").css('border', '1px solid #e9ecef');
}
