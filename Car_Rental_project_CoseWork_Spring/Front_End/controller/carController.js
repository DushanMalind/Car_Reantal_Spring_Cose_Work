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


/*function saveCar() {
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
      swal({
        title: "Successfully Register Car Details",
        text: "message!",
        type: "success",
        showCancelButtonClass: "btn-primary",
        confirmButtonClass: "btn-danger",
      });
    }
  });
}*/


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
    interiorViewImage: $('#uploadInteriorView')[0].files[0].name,
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
      Swal.fire('Success', 'Successfully Register Car Details', 'success');
    },
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
                            <span class="badge rounded-pill text-black">${responseKey.availableOrNot}</span></td><td>
                            <span class="badge rounded-pill text-black">${responseKey.damageOrNot}</span></td><td>
                            <span class="badge rounded-pill text-black">${responseKey.underMaintainOrNot}</span> </td><td>
                            ${responseKey.totalDistanceTraveled} </td><td>
                            <img src="http://localhost:8081/Back_End_war/uploads/${responseKey.fontViewImage}" width="50px" height="50px"  class="rounded-circle"></td><td>
                            <img src="http://localhost:8081/Back_End_war/uploads/${responseKey.backViewImage}" width="50px" height="50px"  class="rounded-circle"></td><td>
                            <img src="http://localhost:8081/Back_End_war/uploads/${responseKey.sideViewImage}" width="50px" height="50px"  class="rounded-circle"></td><td>
                            <img src="http://localhost:8081/Back_End_war/uploads/${responseKey.interiorViewImage}" width="50px" height="50px"  class="rounded-circle"></td><td>

                             <td><button type="button" id="btnEditCar"  class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                <i class="fas fa-pen-alt"></i>
                              </button></td></tr>`;
        $("#tblCars tbody").append(raw);

      }

      BindRowClickEvent();
      clearFieldsFromCarPage();

    },
    error: function (error) {
      alert(error);
    }
  });
}
/**/

/* <img src="http://localhost:8081/Back_End_war/uploads/${responseKey.fontViewImage}" width="50px" height="50px" alt="Front View Image" class="rounded-circle"></td><td>*/
/*loadAllCars();*/
/*$("#btnAddNewCar").click(function () {
  $("#tblCars tbody > tr").off('click');

  /!*swal({
    title: "Are you sure? Add Ths Car Details",
    text: "Once Added, You will not be able to recover this Car Details!",
    type: "success",
    showCancelButtonClass: "btn-danger",
    confirmButtonClass: "btn-success",
  });*!/

  let text = "Are you sure? Add Ths Car Details";

  /!* if (confirm() == true) {*!/
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

        swal({
          title: "Successfully Register Car Details",
          text: "message!",
          type: "success",
          showCancelButtonClass: "btn-primary",
          confirmButtonClass: "btn-danger",
        });

      }

    }

  }

  /!* }*!/

});*/

$("#btnAddNewCar").click(function () {
  $("#tblCars tbody > tr").off('click');

  let text = "Are you sure? Add This Car Details";

  if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
    $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
    $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
    $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
    $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" || $("#availableOrNot option:selected").val() == "") {

    Swal.fire('Warning', 'Please Fill All Fields', 'warning');
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

        Swal.fire('Success', 'Successfully Register Car Details', 'success');
      }
    }
  }
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

var tblClickRow=-1;
/*
function BindRowClickEvent() {
  $("#tblCars tbody > tr").click(function () {

    tblClickRow = $(this);

    swal({
      title: "Do you want to Edit cars ?",
      text: "message!",
      type: "info",
      showCancelButtonClass: "btn-success",
      confirmButtonClass: "btn-success",
    });

      $('#CarManagePage').css('transform','scale(1)');

      var carId = $.trim(tblClickRow.children(':nth-child(1)').text());
      var regNo = $.trim(tblClickRow.children(':nth-child(5)').text());
      var passengers = $.trim(tblClickRow.children(':nth-child(8)').text());
      var dailyRate = $.trim(tblClickRow.children(':nth-child(9)').text());
      var monthlyRate = $.trim(tblClickRow.children(':nth-child(10)').text());
      var freeKMDay = $.trim(tblClickRow.children(':nth-child(11)').text());
      var freeKmMonth = $.trim(tblClickRow.children(':nth-child(12)').text());
      var extraKm = $.trim(tblClickRow.children(':nth-child(13)').text());
      var totalDistance = $.trim(tblClickRow.children(':nth-child(17)').text());



      $("#brand").append($("<option selected></option>").attr("value", 14).text($.trim(tblClickRow.children(':nth-child(2)').text())));
      $("#colour").append($("<option selected></option>").attr("value", 11).text($.trim(tblClickRow.children(':nth-child(3)').text())));
      $("#type").append($("<option selected></option>").attr("value", 4).text($.trim(tblClickRow.children(':nth-child(4)').text())));
      $("#transmissionType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(7)').text())));
      $("#fuelType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(6)').text())));
      $("#availableOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(14)').text())));
      $("#damageOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(15)').text())));
      $("#underMaintainOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(16)').text())));

      $("#carId").val(carId);
      $("#registrationNo").val(regNo);
      $("#noOfPassengers").val(passengers);
      $("#dailyRatePrice").val(dailyRate);
      $("#monthlyRatePrice").val(monthlyRate);
      $("#freeKMPerDay").val(freeKMDay);
      $("#freeKMPerMonth").val(freeKmMonth);
      $("#priceForExtraKM").val(extraKm);
      $("#totalDistanceTravelled").val(totalDistance);
      $("#transmissionType option:selected").val($.trim(tblClickRow.children(':nth-child(7)').text()));
      $("#uploadFrontView").val('');
      $("#uploadBackView").val('');
      $("#uploadSideView").val('');
      $("#uploadInteriorView").val('');


  });
}
*/

var tblClickRow = -1;

function BindRowClickEvent() {
  $("#tblCars tbody > tr").click(function () {
    tblClickRow = $(this);

    Swal.fire({
      title: "Do you want to Edit cars ?",
      text: "message!",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonClass: "btn-success",
    }).then((result) => {
      if (result.isConfirmed) {
        $('#CarManagePage').css('transform', 'scale(1)');

        var carId = $.trim(tblClickRow.children(':nth-child(1)').text());
        var regNo = $.trim(tblClickRow.children(':nth-child(5)').text());
        var passengers = $.trim(tblClickRow.children(':nth-child(8)').text());
        var dailyRate = $.trim(tblClickRow.children(':nth-child(9)').text());
        var monthlyRate = $.trim(tblClickRow.children(':nth-child(10)').text());
        var freeKMDay = $.trim(tblClickRow.children(':nth-child(11)').text());
        var freeKmMonth = $.trim(tblClickRow.children(':nth-child(12)').text());
        var extraKm = $.trim(tblClickRow.children(':nth-child(13)').text());
        var totalDistance = $.trim(tblClickRow.children(':nth-child(17)').text());

        $("#brand").append($("<option selected></option>").attr("value", 14).text($.trim(tblClickRow.children(':nth-child(2)').text())));
        $("#colour").append($("<option selected></option>").attr("value", 11).text($.trim(tblClickRow.children(':nth-child(3)').text())));
        $("#type").append($("<option selected></option>").attr("value", 4).text($.trim(tblClickRow.children(':nth-child(4)').text())));
        $("#transmissionType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(7)').text())));
        $("#fuelType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(6)').text())));
        $("#availableOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(14)').text())));
        $("#damageOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(15)').text())));
        $("#underMaintainOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(16)').text())));

        $("#carId").val(carId);
        $("#registrationNo").val(regNo);
        $("#noOfPassengers").val(passengers);
        $("#dailyRatePrice").val(dailyRate);
        $("#monthlyRatePrice").val(monthlyRate);
        $("#freeKMPerDay").val(freeKMDay);
        $("#freeKMPerMonth").val(freeKmMonth);
        $("#priceForExtraKM").val(extraKm);
        $("#totalDistanceTravelled").val(totalDistance);
        $("#transmissionType option:selected").val($.trim(tblClickRow.children(':nth-child(7)').text()));
        $("#uploadFrontView").val('');
        $("#uploadBackView").val('');
        $("#uploadSideView").val('');
        $("#uploadInteriorView").val('');
      }
    });
  });
}



/*function updateCar() {
  var carDetails = {
    carId: $("#carId").val(),
    registrationNo:$("#registrationNo").val(),
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
    availableOrNot:$("#availableOrNot option:selected").text(),
    damageOrNot: $("#damageOrNot option:selected").text(),
    underMaintainOrNot: $("#underMaintainOrNot option:selected").text(),
    fontViewImage: $('#uploadFrontView')[0].files[0].name,
    backViewImage: $('#uploadBackView')[0].files[0].name,
    sideViewImage: $('#uploadSideView')[0].files[0].name,
    interiorViewImage: $('#uploadInteriorView')[0].files[0].name
  }

  $.ajax({
    url: baseUrl+"car",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(carDetails),
    success: function (response) {
      if (response.code == 200) {
        alert($("#carId").val() + " " + response.message);
      }
      clearFieldsFromCarPage()
      loadAllCars();
      swal({
        title: "Successfully Update Car Details",
        text: "message!",
        type: "success",
        showCancelButtonClass: "btn-primary",
        confirmButtonClass: "btn-danger",
      });
    },
    error: function (error) {
      alert(JSON.parse(error.responseText).message);
    }
  });
}*/

function updateCar() {
  var carDetails = {
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
    interiorViewImage: $('#uploadInteriorView')[0].files[0].name,
  };

  $.ajax({
    url: baseUrl + "car",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(carDetails),
    success: function (response) {
      if (response.code == 200) {
        Swal.fire('Success', $("#carId").val() + " " + response.message, 'success');
      }
      clearFieldsFromCarPage();
      loadAllCars();
      Swal.fire('Success', 'Successfully Update Car Details', 'success');
    },
    error: function (error) {
      Swal.fire('Error', JSON.parse(error.responseText).message, 'error');
    },
  });
}




/*$("#btnUpdateCar").click(function () {
  let text = "Do you want to update this cars ?";

 /!* if (confirm(text) == true) {*!/

 /!* swal({
    title: "Do you want to update this cars ?",
    text: "message!",
    type: "info",
    showCancelButtonClass: "btn-primary",
    confirmButtonClass: "btn-success",
  });*!/

    if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
      $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
      $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
      $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
      $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" ||  $("#availableOrNot option:selected").val() == ""){
      /!*alert("All Fields Are Required !");*!/
      swal({
        title: "Please Fill All Fields",
        text: "message!",
        type: "warning",
        showCancelButtonClass: "btn-primary",
        confirmButtonClass: "btn-danger",
      });
    } else {
      if ($("#errorRegNo").text() != "" || $("#errorPassengers").text() != "" || $("#errorDailyRate").text() != "" || $("#errorMonthlyRate").text() != "" ||
        $("#errorFeeKMDay").text() != "" || $("#errorFreeKMMonth").text() != "" || $("#errorExtraKMPrice").text() != "" || $("#errorTotalDistance").text() != ""){
        alert("Check Input Fields Whether Correct !");
      }else {
        if ($('#uploadFrontView').get(0).files.length === 0 || $('#uploadBackView').get(0).files.length === 0 || $('#uploadSideView').get(0).files.length === 0 || $('#uploadInteriorView').get(0).files.length === 0) {
          alert("No Images Inserted !");
        }else {
          updateCar();
          uploadCarImages();
          swal({
            title: "Successfully Update Car Details",
            text: "message!",
            type: "success",
            showCancelButtonClass: "btn-primary",
            confirmButtonClass: "btn-danger",
          });
        }
      }

    }
  /!*}else {}*!/
});*/


$("#btnUpdateCar").click(function () {
  let text = "Do you want to update this cars ?";

  /* if (confirm(text) == true) { */

  /* swal({
    title: "Do you want to update this cars ?",
    text: "message!",
    type: "info",
    showCancelButtonClass: "btn-primary",
    confirmButtonClass: "btn-success",
  }); */

  if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
    $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
    $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
    $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
    $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" || $("#availableOrNot option:selected").val() == "") {
    /*alert("All Fields Are Required !");*/
    Swal.fire('Warning', 'Please Fill All Fields', 'warning');
  } else {
    if ($("#errorRegNo").text() != "" || $("#errorPassengers").text() != "" || $("#errorDailyRate").text() != "" || $("#errorMonthlyRate").text() != "" ||
      $("#errorFeeKMDay").text() != "" || $("#errorFreeKMMonth").text() != "" || $("#errorExtraKMPrice").text() != "" || $("#errorTotalDistance").text() != "") {
      alert("Check Input Fields Whether Correct !");
    } else {
      if ($('#uploadFrontView').get(0).files.length === 0 || $('#uploadBackView').get(0).files.length === 0 || $('#uploadSideView').get(0).files.length === 0 || $('#uploadInteriorView').get(0).files.length === 0) {
        alert("No Images Inserted !");
      } else {
        updateCar();
        uploadCarImages();
        Swal.fire('Success', 'Successfully Update Car Details', 'success');
      }
    }
  }

  /*}else {}*/
});



function clearCarUpdateFields() {
  $("#brand").find('option:last').remove();
  $("#colour").find('option:last').remove();
  $("#type").find('option:last').remove();
  $("#transmissionType").find('option:last').remove();
  $("#fuelType").find('option:last').remove();
  $("#availableOrNot").find('option:last').remove();
  $("#damageOrNot").find('option:last').remove();
  $("#underMaintainOrNot").find('option:last').remove();
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

$("#btnClerar").click(function (){
  clearFieldsFromCarPage();
});

/*function base64ToUint8Array(base64) {
  const binaryString = window.atob(base64);
  const length = binaryString.length;
  const uint8Array = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  return uint8Array;
}


function byteArrayToImage(byteArray) {
  const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;

}*/
