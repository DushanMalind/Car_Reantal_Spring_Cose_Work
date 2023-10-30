$("#btnLogToSystem").click(function (){
  if ($("#loginUsername").val() == "" || $("#loginPassword").val() == "") {
    alert("All Fields Are Required To Log !");
  } else {
    isExistsAdmin($("#loginUsername").val(), $("#loginPassword").val());
  }
});


function isExistsAdmin(username, password) {
  $.ajax({
    url: "http://localhost:8081/Back_End_war/user/" + password + "/" + username,
    method: "GET",
    success: function (response) {
      if (response.data.username == $("#loginUsername").val() && response.data.password == $("#loginPassword").val()) {
        searchAdminTable(response.data.userId);
      }
      window.location.href = 'driveDashBoard.html';
    },
    error: function (ob) {
      alert("Wrong Username And Password !");
    }
  });
}


function searchAdminTable(usrId){
  $.ajax({
    url: "http://localhost:8081/Back_End_war/driver/USER/"+usrId,
    method: "GET",
    success: function (response) {
      for (var i in response.data) {
        if (response.data[i].username == $("#loginUsername").val() && response.data[i].password == $("#loginPassword").val()) {

        }
      }

    }
  });
}
