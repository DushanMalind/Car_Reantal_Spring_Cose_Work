$("#btnRegisterInAdmin").click(function (){
  if ($("#loginUsernameAdmin").val() == "" || $("#loginPasswordAdmin").val() == "") {
    alert("All Fields Are Required To Log !");
  } else {
    isExistsAdmin($("#loginUsernameAdmin").val(), $("#loginPasswordAdmin").val());
  }
});


function isExistsAdmin(username, password) {
  $.ajax({
    url: "http://localhost:8081/Back_End_war/user/" + password + "/" + username,
    method: "GET",
    success: function (response) {
      loadAllAdminPanelData();
      if (response.data.username == $("#loginUsernameAdmin").val() && response.data.password == $("#loginPasswordAdmin").val()) {
        searchAdminTable(response.data.userId);
      }
      window.location.href = 'addMinDashBoard.html';
    },
    error: function (ob) {
      alert("Wrong Username And Password !");
    }
  });
}


function searchAdminTable(usrId){
  $.ajax({
    url: "http://localhost:8081/Back_End_war/admin/USER/"+usrId,
    method: "GET",
    success: function (response) {
      for (var i in response.data) {
        if (response.data[i].username == $("#loginUsernameAdmin").val() && response.data[i].password == $("#loginPasswordAdmin").val()) {

        }
      }

    }
  });
}
