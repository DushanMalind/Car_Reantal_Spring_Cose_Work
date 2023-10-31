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
