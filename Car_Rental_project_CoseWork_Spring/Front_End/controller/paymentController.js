let baseURLForPayment="http://localhost:8081/Back_End_war/"


var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regExDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExDistance = /^[0-9]{1,5}$/;


$("#paymentDate").keyup(function (event) {
  let date = $("#paymentDate").val();
  if (regExDate.test(date)) {
    $("#paymentDate").css('border', '2px solid #31d2f2');
    $("#errorPaymentDate").text("");
    if (event.key == "Enter") {
      $("#rentFee").focus();
    }
  } else {
    $("#paymentDate").css('border', '2px solid red');
    $("#errorPaymentDate").text("Check this field whether correct !");
  }
});



$("#rentFee").keyup(function (event) {
  let rentFee = $("#rentFee").val();
  if (regExPrice.test(rentFee)) {
    $("#rentFee").css('border', '2px solid #31d2f2');
    $("#errorRentFee").text("");
    if (event.key == "Enter") {
      $("#driverFee").focus();
    }
  } else {
    $("#rentFee").css('border', '2px solid red');
    $("#errorRentFee").text("Check this field whether correct !");
  }
});



$("#driverFee").keyup(function (event) {
  let driverFee = $("#driverFee").val();
  if (regExPrice.test(driverFee)) {
    $("#driverFee").css('border', '2px solid #31d2f2');
    $("#errorDriverFee").text("");
    if (event.key == "Enter") {
      $("#loseDamageWaiverPayment").focus();
    }
  } else {
    $("#driverFee").css('border', '2px solid red');
    $("#errorDriverFee").text("Check this field whether correct !");
  }
});


$("#travelledDistance").keyup(function (event) {
  let distance = $("#travelledDistance").val();
  if (regExDistance.test(distance)) {
    $("#travelledDistance").css('border', '2px solid #31d2f2');
    $("#errorTravelledDistance").text("");
    if (event.key == "Enter") {
      $("#extraKm").focus();
    }
  } else {
    $("#travelledDistance").css('border', '2px solid red');
    $("#errorTravelledDistance").text("Check this field whether correct !");
  }
});


$("#extraKm").keyup(function (event) {
  let extra = $("#extraKm").val();
  if (regExDistance.test(extra)) {
    $("#extraKm").css('border', '2px solid #31d2f2');
    $("#errorTravelledExtraKM").text("");
    if (event.key == "Enter") {
      $("#priceForTravelledExtraKm").focus();
    }
  } else {
    $("#extraKm").css('border', '2px solid red');
    $("#errorTravelledExtraKM").text("Check this field whether correct !");
  }
});


$(document).ready(function() {
  $("#vehicle_Return").prop("disabled", true);
});


function generatePaymentIds() {
  $("#paymentId").val("P00-0001");
  var test = "id";

  $.ajax({
    url: baseURLForPayment + "payment?test=" + test,
    method: "GET",
    success: function (response) {
      var paymentId = response.data;
      var tempId = parseInt(paymentId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#paymentId").val("P00-000" + tempId);
      } else if (tempId <= 99) {
        $("#paymentId").val("P00-00" + tempId);
      } else if (tempId <= 999) {
        $("#paymentId").val("P00-0" + tempId);
      } else {
        $("#paymentId").val("P00-" + tempId);
      }

    },
    error: function (ob, statusText, error) {
    }

  });
}


/*$("#calculateFullIncome").click(function () {
  $("#tblPayment tbody > tr").off("click");

  let text = "Do you want to make this payment ?";

  if (confirm(text) == true) {
    if ($("#rentalId").val() == "" || $("#reserveCarId").val() == "" || $("#paymentDate").val() == "" || $("#rentFee").val() == "" || $("#driverFee").val() == "" || $("#extraKm").val() == "" || $("#loseDamageWaiverPayment").val() == "" || $("#priceForTravelledExtraKm").val() == "" ||
      $("#reducedLoseDamageWaiverPayment").val() == "" || $("#travelledDistance").val() == "" || $("#carHarmOrNot option:selected").val() == "") {
      alert("All Fields Are Required !");
    } else {
      if ($("#errorPaymentDate").text() != "" || $("#errorRentFee").text() != "" || $("#errorDriverFee").text() != "" || $("#errorDamagePayment").text() != "" || $("#errorReduceDamagePayment").text() != "" || $("#errorTravelledDistance").text() != "" ||
        $("#errorTravelledExtraKM").text() != "" || $("#errorPriceExtraKM").text() != "") {
        alert("Check Input Fields Whether Correct !");
      } else {

        calculateIncome();


      }
    }
  } else {

  }
});*/

$("#calculateFullIncome").click(function () {
  $("#tblPayment tbody > tr").off("click");

  let text = "Do you want to make this payment ?";

  Swal.fire({
    title: 'Confirmation',
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      if ($("#rentalId").val() == "" || $("#reserveCarId").val() == "" || $("#paymentDate").val() == "" || $("#rentFee").val() == "" || $("#driverFee").val() == "" || $("#extraKm").val() == "" || $("#loseDamageWaiverPayment").val() == "" || $("#priceForTravelledExtraKm").val() == "" ||
        $("#reducedLoseDamageWaiverPayment").val() == "" || $("#travelledDistance").val() == "" || $("#carHarmOrNot option:selected").val() == "") {
        Swal.fire('Error', 'All Fields Are Required!', 'error');
      } else {
        if ($("#errorPaymentDate").text() != "" || $("#errorRentFee").text() != "" || $("#errorDriverFee").text() != "" || $("#errorDamagePayment").text() != "" || $("#errorReduceDamagePayment").text() != "" || $("#errorTravelledDistance").text() != "" ||
          $("#errorTravelledExtraKM").text() != "" || $("#errorPriceExtraKM").text() != "") {
          Swal.fire('Error', 'Check Input Fields Whether Correct!', 'error');
        } else {
          calculateIncome();
        }
      }
    }
  });
});


function loadReservationsIds() {
  $("#rentalId").empty();
  $("#rentalId").append($("<option></option>").attr("value", 0).text("Select ID"));

  var countRentalIds = 1;
  $.ajax({
    url: baseURLForReserveDetails + "reserve",
    method: "GET",
    success: function (response) {
      for (var ids of response.data) {
        $("#rentalId").append($("<option></option>").attr("value", countRentalIds).text(ids.reserveId));
        countRentalIds++;
      }
    },
    error: function (ob) {
    }
  });
}


$("#rentalId").change(function () {
  let rentId = $("#rentalId option:selected").text();
  $("#loseDamageWaiverPayment").val(0);
  $("#reserveCarId").empty();
  $("#reserveCarId").append($("<option></option>").attr("value", 0).text("Select ID"));
  console.log(rentId);
  $.ajax({
    url: baseURLForReserveDetails + "reserve/" + rentId,
    method: "GET",
    success: function (response) {
      for (let i = 0; i < response.data.reserveDetails.length; i++) {
        if ($("#rentalId option:selected").text() == response.data.reserveDetails[i].reserveId) {
          $("#reserveCarId").append($("<option></option>").attr("value", i + 1).text(response.data.reserveDetails[i].carId));
          $("#loseDamageWaiverPayment").val(response.data.reserveDetails[i].loseDamageWaiverPayment);
          $("#rentDriverId").val(response.data.reserveDetails[i].driverId);
        } else {
          $("#reserveCarId").append($("<option></option>").attr("value", 0).text("Select ID"));
          $("#loseDamageWaiverPayment").val("0");
          $("#rentDriverId").val("0");
        }
      }
    },
    error: function (ob) {
    }
  });

});


$("#reducedLoseDamageWaiverPayment").val("0");
$("#priceForTravelledExtraKm").val("0");

$("#carHarmOrNot").change(function () {

  if ($("#carHarmOrNot option:selected").text() == "None") {

    $("#reducedLoseDamageWaiverPayment").val("0");

  } else if ($("#carHarmOrNot option:selected").text() == "Harm") {
    let reduce_price = $("#loseDamageWaiverPayment").val();
    $("#reducedLoseDamageWaiverPayment").val(reduce_price);

  } else if ($("#carHarmOrNot option:selected").text() == "Not Harm") {
    $("#reducedLoseDamageWaiverPayment").val("0");
  }
});


$("#reserveCarId").change(function () {
  let newCarId = $("#reserveCarId option:selected").text();
  $("#pricePerExKm").val("0");
  $.ajax({
    url: baseURLForReserveDetails + "car/" + newCarId,
    method: "GET",
    success: function (response) {

      console.log(response.data.pricePerExtraKM);
      $("#pricePerExKm").val(response.data.pricePerExtraKM);

    },
    error: function (ob) {
      $("#pricePerExKm").val("0");
    }
  });

});

$("#extraKm").on('keydown keyup', function (event) {
  let kmCount = $("#extraKm").val();
  let pricePerOneKm = $("#pricePerExKm").val();

  $("#priceForTravelledExtraKm").val(kmCount * pricePerOneKm);

});


$("#fullPayment").prop("readonly", true);
$("#loseDamageWaiverPayment").prop("readonly", true);
$("#pricePerExKm").prop("readonly", true);
$("#priceForTravelledExtraKm").prop("readonly", true);
$("#reducedLoseDamageWaiverPayment").prop("readonly", true);



$("#cal_full_Tot").click(function () {

  calculateTotalPrice();
});



function calculateTotalPrice() {
  /* for subtraction */
  let loseDamagePayment = parseFloat($("#loseDamageWaiverPayment").val());

  /* for addition */
  let rentPrice = parseFloat($("#rentFee").val());
  let drivePrice = parseFloat($("#driverFee").val());
  let reduceLosDamage = parseFloat($("#reducedLoseDamageWaiverPayment").val());
  let totalOfExKmPrice = parseFloat($("#priceForTravelledExtraKm").val());

  let totPrice = rentPrice + drivePrice + reduceLosDamage + totalOfExKmPrice - loseDamagePayment;

  $("#fullPayment").val(totPrice.toString());

  if ($("#fullPayment").val().length > 0){
    $("#vehicle_Return").prop("disabled", false);
  }
}




var tempuser;
var UpdateDriver;
let releaseStatus = "Release";

$("#vehicle_Return").click(function () {
  let dId = $("#rentDriverId").val();
  $.ajax({
    url: baseUrlDriver + "driver/" + dId,
    method: "GET",
    success: function (response) {
      var driverDetail = {
        driverId: response.data.driverId,
        users: response.data.users,
        driverName: response.data.driverName,
        driverAddress: response.data.driverAddress,
        driverAge: response.data.driverAge,
        driverContact: response.data.driverContact,
        releaseOrNot: releaseStatus,
      };
      UpdateDriver = driverDetail;
      updateDriver1(); // call updateDriver function here
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
});


function updateDriver1() {

  $.ajax({
    url: baseUrlDriver+ "driver",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(UpdateDriver),
    success: function (response) {
      if (response.code == 200) {
        alert($("#driverId").val() + " " + response.message);
      }
    },
    error: function (error) {
     alert(error);
    }
  });
}


function calculateIncome() {
  var rDetail= {
    carId:$("#reserveCarId option:selected").text(),
    driverId:$("#rentDriverId").val(),
    reserveId:$("#rentalId option:selected").text()
  }
  var paymentDetail = {
    paymentId: $("#paymentId").val(),
    paymentDate: $("#paymentDate").val(),
    rentFee: $("#rentFee").val(),
    harmOrNot: $("#driverReleaseOrNot option:selected").text(),
    loseDamagePayment: $("#loseDamageWaiverPayment").val(),
    reduceLoseDamagePayment: $("#reducedLoseDamageWaiverPayment").val(),
    driverFee: $("#driverFee").val(),
    travelledDistance: $("#travelledDistance").val(),
    extraKm: $("#extraKm").val(),
    extraKmPrice: $("#priceForTravelledExtraKm").val(),
    fullPayment: $("#fullPayment").val(),
    reserveDetails:rDetail
  }

  $.ajax({
    url: baseURLForPayment + "payment",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(paymentDetail),
    success: function (response) {
      if (response.code == 200) {
        alert($("#paymentId").val() + " " + response.message);
        generatePaymentIds();
        loadPayments();

      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}
$("#btnDailyIncome").click(function () {
  //Daily FullPayment
  $.ajax({
    url: baseURLForPayment+'payment/daily',
    type: 'GET',
    success: function(response) {
      $("#daily").text(response.data);
    }
  });
});

$("#btnWeeklyIncome").click(function () {
  //Weekly FullPayment
  $.ajax({
    url: baseURLForPayment+'payment/weekly',
    type: 'GET',
    success: function(response) {
      $("#weekly").text(response.data);
    }
  });
});

$("#btnMonthlyIncome").click(function () {
  //Monthly FullPayment
  $.ajax({
    url: baseURLForPayment+'payment/monthly',
    type: 'GET',
    success: function(response) {
      $("#monthly").text(response.data);
    }
  });
});

$("#btnAnnuallyIncome").click(function () {
  //Annually FullPayment
  $.ajax({
    url: baseURLForPayment+'payment/yearly',
    type: 'GET',
    success: function(response) {
      $("#yearly").text(response.data);
    }
  });
});





$("#btnFindAllPaymentDetails").click(function () {
  let startDay = $("#startDate").val();
  let endDay = $("#endDate").val();
  $.ajax({
    url: baseURLForPayment+"payment/payments",
    method: "GET",
    data: {
      startDate:startDay,
      endDate: endDay
    },
    success: function(response) {
      $("#tblIncome tbody").empty();

      for (var responseKey of response.data) {

        let rawDayBetween = `<tr><td> ${responseKey.reserveDetails.reserveId} </td><td> ${responseKey.paymentDate} </td><td> ${responseKey.rentFee} </td><td> ${responseKey.driverFee} </td>
                               <td>${responseKey.extraKmPrice}</td><td> ${responseKey.loseDamagePayment}</td> <td>${responseKey.fullPayment}</td> </tr>`;

        $("#tblIncome tbody").append(rawDayBetween);
      }
      loadFullIncome();

    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
  loadFullIncome();
});


function loadFullIncome() {
  var totalFullPayment = 0;
  $("#tblIncome tbody tr").each(function() {
    var fullPayment = parseFloat($(this).find("td:last").text());
    totalFullPayment += fullPayment;
  });
  $("#RangeOfIncome").text(totalFullPayment);
}


function loadPayments() {
  $.ajax({
    url: baseURLForPayment + "payment",
    method: "GET",
    success: function (response) {

      $("#tblPayment tbody").empty();
      $("#tblIncome tbody").empty();
      for (var responseKey of response.data) {
        let raw1 = `<tr><td> ${responseKey.paymentId} </td><td> ${responseKey.paymentDate} </td><td> ${responseKey.rentFee} </td><td> ${responseKey.driverFee} </td>
                               <td> ${responseKey.loseDamagePayment} </td><td> ${responseKey.reduceLoseDamagePayment} </td><td>
                                <span class="badge rounded-pill text-bg-warning">${responseKey.harmOrNot}</span></td>
                                <td>${responseKey.travelledDistance} </td><td> ${responseKey.extraKm} </td><td>${responseKey.extraKmPrice}</td><td>${responseKey.fullPayment}</td>
                                <td><button type="button" class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                    <i class="fas fa-pen-alt"></i>
                                </button></td></tr>`;


        let raw2 = `<tr><td> ${responseKey.reserveDetails.reserveId} </td><td> ${responseKey.paymentDate} </td><td> ${responseKey.rentFee} </td><td> ${responseKey.driverFee} </td>
                               <td>${responseKey.extraKmPrice}</td><td> ${responseKey.loseDamagePayment}</td> <td>${responseKey.fullPayment}</td> </tr>`;


        $("#tblPayment tbody").append(raw1);
        $("#tblIncome tbody").append(raw2);
      }
      loadFullIncome();
      generatePaymentIds();
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}

