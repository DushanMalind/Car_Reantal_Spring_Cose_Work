let baseURLAdminPanel = "http://localhost:8081/Back_End_war/"


var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);


function totalNewUsers() {
  $.ajax({
    url: baseURLAdminPanel + "customer/NewUsers/" + today,
    method: "GET",
    success: function (response) {
      if (response.data == "") {
        $("#totalNewUsers").text(0);
      } else {
        $("#totalNewUsers").text(response.data);
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}


