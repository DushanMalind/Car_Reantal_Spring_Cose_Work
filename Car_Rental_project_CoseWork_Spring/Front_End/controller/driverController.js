let baseUrlDriver="http://localhost:8081/Back_End_war/";


var regExDriverUsername = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExDriverName = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExContact = /^(071|077|075|078|076)[0-9]{7}$/;
var regExDriverAge = /^[1-9]{1,2}$/;
var regExDriverAddress = /^[0-9A-Z a-z,/:]{4,50}$/;


$("#driverUsername").on("keyup", function (event) {
  let driverUsername= $("#driverUsername").val();
  if (regExDriverUsername.test(driverUsername)) {
    $("#driverUsername").css("border", "2px solid green");
    $("#errorDriverUsername").text("");
    if (event.key === "Enter") {
      $("#driverPassword").focus();
    }
  }else {
    $("#driverUsername").css("border", "2px solid red");
    $("#errorDriverUsername").text("Invalid Username");
  }
});


$("#driverPassword").on("keyup", function (event) {
  let driverPassword= $("#driverPassword").val();
  if (regExDriverPassword.test(driverPassword)) {
    $("#driverPassword").css("border", "2px solid green");
    $("#errorDPassword").text("");
    if (event.key === "Enter") {
      $("#driverName").focus();
    }
  }else {
    $("#driverPassword").css("border", "2px solid red");
    $("#errorDPassword").text("Invalid Password");
  }
});


$("#driverName").on("keyup", function (event) {
  let driverName= $("#driverName").val();
  if (regExDriverName.test(driverName)) {
    $("#driverName").css("border", "2px solid green");
    $("#errorDName").text("");
    if (event.key === "Enter") {
      $("#driveAddress").focus();
    }
  }else {
    $("#driverName").css("border", "2px solid red");
    $("#errorDName").text("Invalid Name");
  }
});


$("#driveAddress").on("keyup", function (event) {
  let driveAddress= $("#driveAddress").val();
  if (regExDriverAddress.test(driveAddress)) {
    $("#driveAddress").css("border", "2px solid green");
    $("#errorDAddress").text("");
    if (event.key === "Enter") {
      $("#driverAge").focus();
    }
  }else {
    $("#driveAddress").css("border", "2px solid red");
    $("#errorDAddress").text("Invalid Address");
  }
});


$("#driverAge").on("keyup", function (event) {
  let driverAge= $("#driverAge").val();
  if (regExDriverAge.test(driverAge)) {
    $("#driverAge").css("border", "2px solid green");
    $("#errorDAge").text("");
    if (event.key === "Enter") {
      $("#driverContact").focus();
    }
  }else {
    $("#driverAge").css("border", "2px solid red");
    $("#errorDAge").text("Invalid Age");
  }
});


$("#driverContact").on("keyup", function (event) {
  let driverContact= $("#driverContact").val();
  if (regExDriverContact.test(driverContact)) {
    $("#driverContact").css("border", "2px solid green");
    $("#errorDContact").text("");
    if (event.key === "Enter") {
      $("#btnAddNewDriver").focus();
    }
  }else {
    $("#driverContact").css("border", "2px solid red");
    $("#errorDContact").text("Invalid Contact Number");
  }
});


function generateDriverIds() {
  $("#driverId").val("D00-0001");
  var test = "id";

  $.ajax({
    url: baseUrlDriver+"driver?test="+test,
    method: "GET",
    success: function (response) {
      var driverId = response.data;
      var tempId = parseInt(driverId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#driverId").val("D00-000" + tempId);
      } else if (tempId <= 99) {
        $("#driverId").val("D00-00" + tempId);
      } else if (tempId <= 999) {
        $("#driverId").val("D00-0" + tempId);
      } else {
        $("#driverId").val("D00-" + tempId);
      }

    },
    error: function (ob, statusText, error) {
    }

  });
}





$("#btnAddNewDriver").click(function () {
  $("#tblDriver tbody > tr").off("click");


    if ($("#driverUsername").val() == "" || $("#driverPassword").val() == "" || $("#driverName").val() == "" || $("#driverAddress").val() == "" ||
      $("#driverAge").val() == "" || $("#driverContact").val() == "" || $("#driverReleaseOrNot option:selected").val() == ""){
      swal({
        title: "Please Fill All Fields",
        text: "message!",
        type: "warning",
        showCancelButtonClass: "btn-primary",
        confirmButtonClass: "btn-danger",
      });
    }else {
      if ($("#errorDriverUsername").text() != "" || $("#errorDName").text() != "" || $("#errorDPassword").text() != "" || $("#errorDAddress").text() != "" ||
        $("#errorDAge").text() != "" || $("#errorDContact").text() != ""){
        alert("Check Input Fields Whether Correct !");
      }else {
        addNewDriver();

        swal({
          title: "Successfully Register Driver Details",
          text: "message!",
          type: "success",
          showCancelButtonClass: "btn-primary",
          confirmButtonClass: "btn-danger",
        });

      }
    }

});

function registerUser1(users){
  var user={
    userId:users.userId,
    username:users.username,
    password:users.password,
  }

  $.ajax({
    url:basUrl+"user",
    method:"POST",
    contentType:"application/json",
    data: JSON.stringify(user),
    success:function (resp) {
      /*  alert(resp.message);*/
      console.log(resp);
      if (resp.message==200){
        clearTextFields();
      }

    },
    error:function (error) {
      alert(JSON.parse(error.responseText).message);
    }
  });
}


function addNewDriver() {
  var user={
    userId:$("#generateUserId").text(),
    username:$("#driverUsername").val(),
    password: $("#driverPassword").val()
  }

  var driverDetail = {
    driverId: $("#driverId").val(),
    users:user,
    driverName: $("#driverName").val(),
    driverAddress: $("#driverAddress").val(),
    driverAge: $("#driverAge").val(),
    driverContact: $("#driverContact").val(),
    releaseOrNot: $("#driverReleaseOrNot option:selected").text()
  }

  $.ajax({
    url: baseUrlDriver+"driver",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(driverDetail),
    success: function (response) {
      if (response.code == 200){
        registerUser1(user);
        alert($("#driverId").val() + " "+ response.message);
        loadAllDrivers();
        clearDriverFields();
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}



function loadAllDrivers() {
  $.ajax({
    url: baseUrlDriver+"driver",
    method: "GET",
    success: function (response) {

      $("#tblDriver tbody").empty();
      for (var responseKey of response.data) {
        let raw = `<tr><td> ${responseKey.driverId} </td><td> ${responseKey.driverName} </td><td> ${responseKey.driverAddress} </td><td> ${responseKey.driverAge} </td><td> ${responseKey.driverContact} </td><td> <span class="badge rounded-pill text-black">${responseKey.releaseOrNot}</span> </td>
                <td><button type="button" id="btnEditDriver"  class="btn btn-danger btn-sm px-3" data-ripple-color="dark">
                     <i class="fas fa-pen-alt"></i>
                </button></td></tr>`;
        $("#tblDriver tbody").append(raw);
      }
      clearDriverFields();
      clickDriverTableRow();
    },
    error: function (error) {
      alert(error)
    }
  });
}

var tblDriverRow =-1;

function clickDriverTableRow() {
  $("#tblDriver tbody > tr").click(function () {

    tblDriverRow = $(this);

    let text = "Do you want to update driver ?";

    if (confirm(text) == true) {
      $('#DriverManagePage').css('transform','scale(1)');

      var driverId = $.trim(tblDriverRow.children(':nth-child(1)').text());
      var driverName = $.trim(tblDriverRow.children(':nth-child(2)').text());
      var driverAddress = $.trim(tblDriverRow.children(':nth-child(3)').text());
      var driverAge = $.trim(tblDriverRow.children(':nth-child(4)').text());
      var driverContact = $.trim(tblDriverRow.children(':nth-child(5)').text());

      $("#driverReleaseOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblDriverRow.children(':nth-child(6)').text())));

      $("#driverId").val(driverId);
      $("#driverName").val(driverName);
      $("#driverAddress").val(driverAddress);
      $("#driverAge").val(driverAge);
      $("#driverContact").val(driverContact);

      findUserNameAndPassword(driverId);

    } else {}
  });
}

/*findUserNameAndPassword();*/

function findUserNameAndPassword(driverId) {
  $.ajax({
    url: baseUrlDriver+"driver/" + driverId,
    method: "GET",
    success: function (response) {
      $("#driverUsername").val(response.data.users.username);
      $("#driverPassword").val(response.data.users.password);
      $("#driverUserId").val(response.data.users.userId);
    },
    error: function (ob) {

    }
  });
}

$("#btnEditPreDriver").click(function () {
  $("#tblDriver tbody > tr").off("click");

  let text = "Do you want to update this driver ?";

  if (confirm(text) == true) {
    if ($("#driverUsername").val() == "" || $("#driverPassword").val() == "" || $("#driverName").val() == "" || $("#driverAddress").val() == "" ||
      $("#driverAge").val() == "" || $("#driverContact").val() == "" || $("#driverReleaseOrNot option:selected").val() == ""){
      alert("All Fields Are Required !");
    }else {
      if ($("#errorDriverUsername").text() != "" || $("#errorDName").text() != "" || $("#errorDPassword").text() != "" || $("#errorDAddress").text() != "" ||
        $("#errorDAge").text() != "" || $("#errorDContact").text() != ""){
        alert("Check Input Fields Whether Correct !");
      }else {
        updateDriver();
      }
    }
  }else {}

});

function updateDriver() {
  var user={
    userId:$("#driverUserId").text(),
    username:$("#driverUsername").val(),
    password: $("#driverPassword").val()
  }

  var driverDetail = {
    driverId: $("#driverId").val(),
    users:user,
    driverName: $("#driverName").val(),
    driverAddress: $("#driverAddress").val(),
    driverAge: $("#driverAge").val(),
    driverContact: $("#driverContact").val(),
    releaseOrNot: $("#driverReleaseOrNot option:selected").text()
  }

  $.ajax({
    url: baseUrlDriver+"driver",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(driverDetail),
    success: function (response) {
      if (response.code == 200) {
        alert($("#driverId").val() + " " + response.message);
      }
      clearDriverFields();
      loadAllDrivers();
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    }
  });
}

function clearDriverAfterUpdate() {
  $('#driverReleaseOrNot').find('option:last').remove();
}


function clearDriverFields(){
    $("#driverId").val("");
    $("#driverUsername").val("");
    $("#driverPassword").val("");
    $("#driverName").val("");
    $("#driverAddress").val("");
    $("#driverAge").val("");
    $("#driverContact").val("");
    $("#driverReleaseOrNot").val("");
}
