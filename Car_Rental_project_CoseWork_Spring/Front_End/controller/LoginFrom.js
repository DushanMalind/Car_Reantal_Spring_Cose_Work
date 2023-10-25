/*
var regExLoginUserName =  /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#loginUsername").keyup(function (event) {
  let username = $("#loginUsername").val();
  if (regExLoginUserName.test(username)) {
    $("#loginUsername").css('border', '2px solid #31d2f2');
    if (event.key == "Enter") {
      $("#loginPassword").focus();
    }
    else {
      $("#loginUsername").css('border', '2px solid red');
    }
  }
});


$("#loginPassword").keyup(function (event) {
  let password = $("#loginPassword").val();
  if (regExLoginPassword.test(password)) {
    $("#loginPassword").css('border', '2px solid #31d2f2');

  }
  else {
    $("#loginPassword").css('border', '2px solid red');
  }
});*/



$("#btnLogToSystem").click(function () {

  if ($("#loginUsername").val() == "" || $("#loginPassword").val() == ""){
    alert("All Fields Are Required To Log !");
  }else {
   // isExists($("#loginUsername").val(),$("#loginPassword").val());
   isExists($("#loginUsername").val(),$("#loginPassword").val());

  }

});


function isExists(username, password) {
$.ajax({
    url: "http://localhost:8081/Back_End_war/user/" + password + "/" + username,
    method: "GET",
    success: function (response) {
      if (response.data.username == $("#loginUsername").val() && response.data.password == $("#loginPassword").val()) {
        searchCustomerTable(response.data.userId);

      }
      /*window.location.href = 'page/customerDashBoard.html';*/
      searchAdminTable(response.data.userId,window.location.href = 'page/addMinDashBoard.html');
    },
    error: function (ob) {
      alert("Wrong Username And Password !");
    }
  });
}


function searchCustomerTable(userId){
  $.ajax({
    url: "http://localhost:8081/Back_End_war/customer/USER/"+userId,
    method: "GET",
    success: function (response) {
      for (var i in response.data) {
        if (response.data[i].username == $("#loginUsername").val() && response.data[i].password == $("#loginPassword").val()) {
          /*window.location.href = 'page/customerDashBoard.html';*/
        }
        window.location.href = 'pages/customerDashBoard.html';
      }


    },
    error: function (ob) {
      alert("Wrong Username And Password !");
    }

  });

}

function isExistsAdmin(username, password) {
  $.ajax({
    url: "http://localhost:8081/Back_End_war/admin/" + password + "/" + username,
    method: "GET",
    success: function (response) {
      if (response.data.username == $("#loginUsername").val() && response.data.password == $("#loginPassword").val()) {
        searchAdminTable(response.data.userId);
      }
      window.location.href = 'page/addminDashBoard.html';
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
        if (response.data[i].username == $("#loginUsername").val() && response.data[i].password == $("#loginPassword").val()) {

        }
      }
      window.location.href = 'page/addminDashBoard.html';
    }
  });
}



/*function searchCustomerTable(userId) {
  $.ajax({
    url: "http://localhost:8081/Back_End_war/customer/USER/" + userId,
    method: "GET",
    success: function (response) {
      for (var i in response.data) {
        if (response.data[i].username == $("#loginUsername").val() && response.data[i].password == $("#loginPassword").val()) {
          window.location.href = 'customerDashboard.html';
        }

      }
      /!*log= "Logged";
      window.location.href = 'customerDashboard.html';*!/
    },
    error: function (ob) {
      alert("Wrong Username And Password !");
    }
  });
}*/

