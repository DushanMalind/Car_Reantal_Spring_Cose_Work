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
