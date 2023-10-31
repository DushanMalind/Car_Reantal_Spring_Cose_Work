var regExPickupDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExPickupTime = /^\d{2,}:(?:[0-5]\d)$/;
var regExPickupLocation = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExReturnDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExReturnTime = /^\d{2,}:(?:[0-5]\d)$/;
var regExReturnLocation = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExDestination = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExDuration = /^[1-9]{1,10}$/;



$("#pickUpDate").keyup(function (event) {
  let pickupDate = $("#pickUpDate").val();
  if (regExPickupDate.test(pickupDate)) {
    $("#pickUpDate").css('border', '1px solid blue');
    $("#errorPickupDate").text("");
    if (event.key == "Enter") {
      $("#pickUpTime").focus();
    }
  } else {
    $("#pickUpDate").css('border', '1px solid red');
    $("#errorPickupDate").text("Check this field whether correct !");
  }
});


$("#pickUpDate").keyup(function (event) {
  let pickupDate = $("#pickUpDate").val();
  if (regExPickupDate.test(pickupDate)) {
    $("#pickUpDate").css('border', '1px solid blue');
    $("#errorPickupDate").text("");
    if (event.key == "Enter") {
      $("#pickUpTime").focus();
    }
  } else {
    $("#pickUpDate").css('border', '1px solid red');
    $("#errorPickupDate").text("Check this field whether correct !");
  }
});


$("#pickUpTime").keyup(function (event) {
  let pickupTime = $("#pickUpTime").val();
  if (regExPickupTime.test(pickupTime)) {
    $("#pickUpTime").css('border', '1px solid blue');
    $("#errorPickupTime").text("");
    if (event.key == "Enter") {
      $("#returnDate").focus();
    }
  } else {
    $("#pickUpTime").css('border', '1px solid red');
    $("#errorPickupTime").text("Check this field whether correct !");
  }
});
