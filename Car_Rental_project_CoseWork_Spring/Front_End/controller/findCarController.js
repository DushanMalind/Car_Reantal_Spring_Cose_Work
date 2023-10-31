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


countAvailableCars();

function countAvailableCars() {
  $.ajax({
    url: baseURLForReservation+"car/countOfAvailableCars/" + "Available",
    method: "GET",
    success: function (response) {
      $("#availableCars").text(response.data);
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}

var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);


function generateVReserveIds() {
  $("#reserveId").val("RE00-0001");
  var tempId = "id";

  $.ajax({
    url: baseURLForReservation+"reserve?tempId=" + tempId,
    method: "GET",
    success: function (response) {
      var reserveId = response.data;
      if (reserveId) {
        var tempId = parseInt(reserveId.split("-")[1]);
        tempId = tempId + 1;
        if (tempId <= 9) {
          $("#reserveId").val("RE00-000" + tempId);
        } else if (tempId <= 99) {
          $("#reserveId").val("RE00-00" + tempId);
        } else if (tempId <= 999) {
          $("#reserveId").val("RE00-0" + tempId);
        } else {
          $("#reserveId").val("RE00-" + tempId);
        }
      }
    },
    error: function (ob, statusText, error) {
    }
  });
}

function generateScheduleIds() {
  $("#scheduleId").val("S00-0001");
  var tempId = "id";

  $.ajax({
    url: baseURLForReservation+"schedule?tempId=" + tempId,
    method: "GET",
    success: function (response) {
      var scheduleId = response.data;
      if(scheduleId){
        var tempId = parseInt(scheduleId.split("-")[1]);
        tempId = tempId + 1;
        if (tempId <= 9) {
          $("#scheduleId").val("S00-000" + tempId);
        } else if (tempId <= 99) {
          $("#scheduleId").val("S00-00" + tempId);
        } else if (tempId <= 999) {
          $("#scheduleId").val("S00-0" + tempId);
        } else {
          $("#scheduleId").val("S00-" + tempId);
        }
      }
    },
    error: function (ob, statusText, error) {
    }

  });
}


function pasteDate() {
  $("#pickUpDateEdit").val($("#pickUpDate").val());
  $("#pickUpTimeEdit").val($("#pickUpTime").val());
  $("#returnDateEdit").val($("#returnDate").val());
  $("#returnTimeEdit").val($("#returnTime").val());
  $("#pickUpLocationEdit").val($("#pickUpLocation").val());
  $("#returnLocationEdit").val($("#returnLocation").val());
  $("#destinationEdit").val($("#destination").val());
  $("#durationEdit").val($("#duration").val());

  $("#pickUpDateEdit").prop("disabled", true);
  $("#pickUpTimeEdit").prop("disabled", true);
  $("#returnDateEdit").prop("disabled", true);
  $("#returnTimeEdit").prop("disabled", true);
  $("#pickUpLocationEdit").prop("disabled", true);
  $("#returnLocationEdit").prop("disabled", true);
  $("#destinationEdit").prop("disabled", true);
  $("#durationEdit").prop("disabled", true);
}

function pasteDataToReservationFields() {
  $("#BPickupDate").val($("#pickUpDateEdit").val());
  $("#BPickupTime").val($("#pickUpTimeEdit").val());
  $("#BReturnDate").val($("#returnDateEdit").val());
  $("#BReturnTime").val($("#returnTimeEdit").val());
  $("#BPickupLocation").val($("#pickUpLocationEdit").val());
  $("#BReturnLocation").val($("#returnLocationEdit").val());
  $("#BDestination").val($("#destinationEdit").val());
  $("#BDuration").val($("#durationEdit").val());
}


/*customer booking details edit and update Chance*/

$("#pickUpDateEdit").keyup(function (event) {
  let pickupDate = $("#pickUpDateEdit").val();
  if (regExPickupDate.test(pickupDate)) {
    $("#pickUpDateEdit").css('border', '2px solid #31d2f2');
    $("#errorPickupDateAgain").text("");
  } else {
    $("#pickUpDateEdit").css('border', '2px solid red');
    $("#errorPickupDateAgain").text("Check this field whether correct !");
  }
});


$("#pickUpTimeEdit").keyup(function (event) {
  let pickupTime = $("#pickUpTimeEdit").val();
  if (regExPickupTime.test(pickupTime)) {
    $("#pickUpTimeEdit").css('border', '2px solid #31d2f2');
    $("#errorPickupTimeAgain").text("");
  } else {
    $("#pickUpTimeEdit").css('border', '2px solid red');
    $("#errorPickupTimeAgain").text("Check this field whether correct !");
  }
});

$("#returnDateEdit").keyup(function (event) {
  let returnDate = $("#returnDateEdit").val();
  if (regExReturnDate.test(returnDate)) {
    $("#returnDateEdit").css('border', '2px solid #31d2f2');
    $("#errorDropDateAgain").text("");
  } else {
    $("#returnDateEdit").css('border', '2px solid red');
    $("#errorDropDateAgain").text("Check this field whether correct !");
  }
});


$("#returnTimeEdit").keyup(function (event) {
  let returnTime = $("#returnTimeEdit").val();
  if (regExReturnTime.test(returnTime)) {
    $("#returnTimeEdit").css('border', '2px solid #31d2f2');
    $("#errorDroTimeAgain").text("");
  } else {
    $("#returnTimeEdit").css('border', '2px solid red');
    $("#errorDroTimeAgain").text("Check this field whether correct !");
  }
});


$("#pickUpLocationEdit").keyup(function (event) {
  let pickupLocation = $("#pickUpLocationEdit").val();
  if (regExPickupLocation.test(pickupLocation)) {
    $("#pickUpLocationEdit").css('border', '2px solid #31d2f2');
    $("#errorPickupLocationAgain").text("");
  } else {
    $("#pickUpLocationEdit").css('border', '2px solid red');
    $("#errorPickupLocationAgain").text("Check this field whether correct !");
  }
});


$("#returnLocationEdit").keyup(function (event) {
  let returnLocation = $("#returnLocationEdit").val();
  if (regExReturnLocation.test(returnLocation)) {
    $("#returnLocationEdit").css('border', '2px solid #31d2f2');
    $("#errorDropLocationAgain").text("");
  } else {
    $("#returnLocationEdit").css('border', '2px solid red');
    $("#errorDropLocationAgain").text("Check this field whether correct !");
  }
});


$("#destinationEdit").keyup(function (event) {
  let destination = $("#destinationEdit").val();
  if (regExDestination.test(destination)) {
    $("#destinationEdit").css('border', '2px solid #31d2f2');
    $("#errorDestinationAgain").text("");
  } else {
    $("#destinationEdit").css('border', '2px solid red');
    $("#errorDestinationAgain").text("Check this field whether correct !");
  }
});


$("#durationEdit").keyup(function (event) {
  let duration = $("#durationEdit").val();
  if (regExDuration.test(duration)) {
    $("#durationEdit").css('border', '2px solid #31d2f2');
    $("#errorDurationAgain").text("");
  } else {
    $("#durationEdit").css('border', '2px solid red');
    $("#errorDurationAgain").text("Check this field whether correct !");
  }
});

$("#editRentData").click(function () {
  let text = "Do you want to Edit Data?";

  if (confirm(text) == true) {
    $("#pickUpDateEdit").prop("disabled", false);
    $("#pickUpTimeEdit").prop("disabled", false);
    $("#returnDateEdit").prop("disabled", false);
    $("#returnTimeEdit").prop("disabled", false);
    $("#pickUpLocationEdit").prop("disabled", false);
    $("#returnLocationEdit").prop("disabled", false);
    $("#destinationEdit").prop("disabled", false);
    $("#durationEdit").prop("disabled", false);
  }
});



/*car Filter proceed implement methods and function*/
loadAllCarsToDisplay();

function loadAllCarsToDisplay() {

  $.ajax({

    url: baseURLForReservation + "car",
    method: "GET",

    success: function (response) {
      if (response.data.length == 0) {
        $("#noResult").css('display', 'block');
      } else {
        $("#noResult").css('display', 'none');
      }

      var rentFeeDay;
      var rentFeeMonth;

      $("#tblShowCars").empty();

      for (let responseKey of response.data) {

        console.log(responseKey.type);

        if (responseKey.type == "Luxury") {
          rentFeeDay = 8000.00;
          rentFeeMonth = 25000.00;
        } else if (responseKey.type == "Premium") {
          rentFeeDay = 5000.00;
          rentFeeMonth = 20000.00;
        } else if (responseKey.type == "General") {
          rentFeeDay = 3000.00;
          rentFeeMonth = 10000.00;
        }

        let newDiv = `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">

                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"

                               src="http://localhost:8081/Back_End_war/uploads/${responseKey.fontViewImage}"

                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${responseKey.carId}</span>
                                <h4 class="h3 card-title">${responseKey.brand}</h4>
                                <data class="year" value="2021">${responseKey.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${responseKey.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${responseKey.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${responseKey.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${responseKey.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${responseKey.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeeDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeeMonth}</strong> / Month
                                </p>

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
        $("#tblShowCars").append(newDiv);
      }

      $(".btnRent").click(function () {
        let text = "Do you want to rent this car?";
        if (confirm(text)) {

          let availableStatus = $(this).closest('li').find('data.year').text();
          console.log(availableStatus);
          if (availableStatus == "Not Available") {
            alert("This car is not available now! Choose another one!...");
          }else {
            pasteDataToReservationFields();
            loadSelectedCars($(this).closest('li').find('span.cid').text());
          }
        }
        else {

        }
      });
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}
