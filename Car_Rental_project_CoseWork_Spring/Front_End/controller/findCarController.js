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




