let basUrl="http://localhost:8081/Back_End_war/"


var regExUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExFullName = /^[A-Z|a-z\s]{3,20}$/;
var regExContact = /^(071|077|075|078|076)[0-9]{7}$/;
var regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
var regExEmail = /^[0-9A-Z a-z$&#]{3,10}(@gmail.com)|/;
var regExNIC = /^[0-9]{9}(v)$/;
var regExDrivingLNO = /^[1-9]{1,10}$/;


$("#nameSignIn").keyup(function (event) {
    let name = $(this).val();
    if (regExFullName.test(name)) {
        $(this).css('border', '2px solid green');
        $("#errorUserName").text("");
        if (event.key == "Enter") {
            $("#emailSignIn").focus();
        }
    } else {
        $(this).css('border', '2px solid red');
        $("#errorUserName").text("Invalid Name Format: Kamal");
    }
});


$("#emailSignIn").keyup(function (event) {
  let email = $(this).val();
  if (regExEmail.test(email)) {
      $(this).css('border', '2px solid green');
      $("#errorEmail").text("");
      if (event.key == "Enter") {
          $("#nicSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorEmail").text("Invalid Email Format:");
  }
});


$("#nicSignIn").keyup(function (event) {
  let nic = $(this).val();
  if (regExNIC.test(nic)) {
      $(this).css('border', '2px solid green');
      $("#errorNic").text("");
      if (event.key == "Enter") {
          $("#addressSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorNic").text("Invalid NIC Format:");
  }
});


$("#addressSignIn").keyup(function (event) {
let address = $(this).val();
  if (regExAddress.test(address)) {
      $(this).css('border', '2px solid green');
      $("#errorAddress").text("");
      if (event.key == "Enter") {
          $("#contactSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorAddress").text("Invalid Address Format:");
  }
});

$("#contactSignIn").keyup(function (event) {
let contact = $(this).val();
  if (regExContact.test(contact)) {
      $(this).css('border', '2px solid green');
      $("#errorContact").text("");
      if (event.key == "Enter") {
          $("#drivingLicenseSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorContact").text("Invalid Contact Format:");
  }
});


$("#drivingLicenseSignIn").keyup(function (event) {
let drivingLicense = $(this).val();
  if (regExDrivingLNO.test(drivingLicense)) {
      $(this).css('border', '2px solid green');
      $("#errorDriven").text("");
      if (event.key == "Enter") {
          $("#registerUsername").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorDriven").text("Invalid Driving License Format:");
  }
});

$("#registerUsername").keyup(function (event) {
let username = $(this).val();
  if (regExUserName.test(username)) {
      $(this).css('border', '2px solid green');
      $("#errorUsername").text("");
      if (event.key == "Enter") {
          $("#registerPassword").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorUsername").text("Invalid Username Format:");
  }
});


$("#registerPassword").keyup(function (event) {
let password = $(this).val();
  if (regExPassword.test(password)) {
      $(this).css('border', '2px solid green');
      $("#errorPassword").text("");
      if (event.key == "Enter") {
          $("#btnSignIn").focus();
      }
  }else {
    $(this).css('border', '2px solid red');
    $("#errorPassword").text("Invalid Password Format:");
  }
});

/*function generateCustomerId() {
  $("#generateCustomerId").text("C00-0001");
  var test = "id";

  $.ajax({
    url: basUrl + "customer?test=" + test,
    method: "GET",
    success: function (response) {
      var customerIds = response.data;
      var tempId = parseInt(customerIds.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#generateCustomerId").text("C00-000" + tempId);
      } else if (tempId <= 99) {
        $("#generateCustomerId").text("C00-00" + tempId);
      } else if (tempId <= 999) {
        $("#generateCustomerId").text("C00-0" + tempId);
      } else {
        $("#generateCustomerId").text("C00-" + tempId);
      }
    },
    error: function (ob,statusText,error) {
      console.log(error);

    }

  });
}*/

/*function genarateUserId(){
  $("#generateUserId").text("U00-0001");
  var test = "id";

  $.ajax({
    url: basUrl + "user?test=" + test,
    method: "GET",
    success: function (response) {
      var userId = response.data;
      var tempId = parseInt(userId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#generateUserId").text("U00-000" + tempId);
      } else if (tempId <= 99) {
        $("#generateUserId").text("U00-00" + tempId);
      } else if (tempId <= 999) {
        $("#generateUserId").text("U00-0" + tempId);
      } else {
        $("#generateUserId").text("U00-" + tempId);
      }
    },
    error: function (ob,statusText,error) {
      console.log(error);

    }
  });
}*/



function generateRegisterIds() {
  $("#generateCusId").text("C00-0001");
  var test = "id";

  $.ajax({

    url: basUrl+"customer?test="+test,
    method: "GET",
    success: function (response) {
      var customerId = response.data;
      var tempId = parseInt(customerId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#generateCusId").text("C00-000" + tempId);
      } else if (tempId <= 99) {
        $("#generateCusId").text("C00-00" + tempId);
      } else if (tempId <= 999) {
        $("#generateCusId").text("C00-0" + tempId);
      } else {
        $("#generateCusId").text("C00-" + tempId);
      }

    },
    error: function (ob, statusText, error) {

    }
  });
}

function generateUserIds() {
  $("#generateUserId").text("U00-0001");
  var test = "id";

  $.ajax({
    url: basUrl+"user?test="+test,
    method: "GET",
    success: function (response) {
      var userId = response.data;
      var tempId = parseInt(userId.split("-")[1]);
      tempId = tempId + 1;
      if (tempId <= 9) {
        $("#generateUserId").text("U00-000" + tempId);
      } else if (tempId <= 99) {
        $("#generateUserId").text("U00-00" + tempId);
      } else if (tempId <= 999) {
        $("#generateUserId").text("U00-0" + tempId);
      } else {
        $("#generateUserId").text("U00-" + tempId);
      }

    },
    error: function (ob, statusText, error) {

    }
  });
}



/*function CustomerId() {
  var test="id";
  $.ajax({
    url: basUrl + "customer?test=" + test,
    method: "GET",
    success: function (response) {
      if (response.data == null) {
        test= "id";
      } else {
        let number=parseInt(response.data.slice(4),10);
        number++;
        test="C00-"+number.toString().padStart(3,"0");
      }
    },
    error: function (ob,statusText,error) {
      console.log(error);
    }
  })
}*/

/*function upLoadImage(){
  var data=new FormData();
  let file=$("#upLoadImage")[0].files[0];
  let fileName=$("#upLoadImage")[0].files[0].name;

  data.append("myFile",file,fileName);

  $.ajax({
    url:basUrl+"api/v1/upload",
    method: 'post',
    async: true,
    contentType: false,
    processData: false,
    data: data,
    success:function(resp){
      console.log(resp);
    /!*  alert(resp.message);*!/
    },
    error:function(ob,statusText,error){
      console.log(error);
    }

  });
}*/

function uploadCustomerImages() {
  var data = new FormData();
  let file = $("#upLoadImage")[0].files[0];
  let fileName = $("#upLoadImage")[0].files[0].name;

  data.append("myFile", file, fileName);


  $.ajax({
    url: basUrl + "api/v1/upload",
    method: 'post',
    async: true,
    contentType: false,
    processData: false,
    data: data,
    success: function (resp) {
    },
    error: function (err) {
      console.log(err);
    }
  });
}

var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

function register(){
  var user={
    userId:$("#generateUserId").text(),
    username:$("#registerUsername").val(),
    password:$("#registerPassword").val(),
  }

  var cusDetails={
    customerId:$("#generateCusId").text(),
    users:user,
    registeredDate:today.toString(),
    customerName:$("#nameSignIn").val(),
    customerEmail:$("#emailSignIn").val(),
    customerNIC:$("#nicSignIn").val(),
    customerAddress:$("#addressSignIn").val(),
    customerContact:$("#contactSignIn").val(),
    customerDrivingLicenseId:$("#drivingLicenseSignIn").val(),
    customerDrivingLicenseImage:$("#upLoadImage")[0].files[0].name
  }

  $.ajax({
    url:basUrl+"customer",
    method:"POST",
    contentType:"application/json",
    data: JSON.stringify(cusDetails),
    success:function (resp) {
     if (resp.message==200){
       registerUser(user);
       generateUserIds();
       generateRegisterIds();
     }


    },
    error:function (error) {
      console.log(error);
    }
  });

}

function registerUser(users){
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




$("#btnSignIn").click(function () {
  if ($("#nameSignIn").val()=="" || $("#emailSignIn").val()=="" || $("#nicSignIn").val()=="" ||
    $("#addressSignIn").val()=="" || $("#contactSignIn").val()=="" || $("#drivingLicenseSignIn").val()=="" ||
    $("#registerUsername").val()=="" || $("#registerPassword").val()=="") {
    /*alert("Please Fill All Fields");*/
    swal({
      title: "Please Fill All Fields",
      text: "message!",
      type: "warning",
      showCancelButtonClass: "btn-primary",
      confirmButtonClass: "btn-danger",
    });

  }else {
    if ($("#upLoadImage").get(0).files.length ===0){
      alert("Please Input Fields Image Upload");
    }else {
      if ($("#errorUserName").text() !=="" && $("#errorEmail").text() !=="" && $("#errorNIC").text() !=="" &&
        $("#errorAddress").text() !=="" && $("#errorContact").text() !=="" && $("#errorDriven").text() !=="" &&
        $("#errorUsername").text() !=="" && $("#errorPassword").text() !=="") {
        alert("Check All Input Fields");
      }else {
        $("#btnSignIn").prop("disabled",false);
        register();
       uploadCustomerImages();

        swal({
          title: "Successfully Register Customer",
          text: "message!",
          type: "success",
          showCancelButtonClass: "btn-primary",
          confirmButtonClass: "btn-danger",
        });
      }
    }
  }
});

function clearTextFields(){
  generateUserIds();
  $("#nameSignIn").val("");
  $("#emailSignIn").val("");
  $("#nicSignIn").val("");
  $("#addressSignIn").val("");
  $("#contactSignIn").val("");
  $("#drivingLicenseSignIn").val("");
  $("#registerUsername").val("");
  $("#registerPassword").val("");
  $("#upLoadImage").val("");
}


function loadAllCustomer() {

  $.ajax({
    url: basUrl+"customer",
    method: "GET",
    success: function (response) {

      $("#tblCustomers tbody").empty();
      for (var responseKey of response.data) {
        let raw = `<tr><td>${responseKey.customerId}</td><td>${responseKey.customerName}</td>
                            <td>${responseKey.registeredDate}</td><td>${responseKey.customerEmail}</td><td>${responseKey.customerNIC}</td>
                            <td>${responseKey.customerAddress}</td><td>${responseKey.customerContact}</td><td>${responseKey.customerDrivingLicenseId}</td>
                             <div class="d-flex align-items-center"><td>
                                <img src="https://www.americanpress.com/wp-content/uploads/sites/65/2021/12/Autism-license.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                                </div></td> </tr>`;
        $("#tblCustomers tbody").append(raw);
      }
    },
    error: function (error) {
      alert(JSON.parse(error.responseText).message);
    }
  });

}
