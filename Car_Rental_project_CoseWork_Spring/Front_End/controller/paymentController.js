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

