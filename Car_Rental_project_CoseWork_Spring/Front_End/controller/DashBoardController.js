/*
// This is the controller for the dashboard page


$("#btnLogin").click(function () {
  $("#login_page_container").css('transform', 'scale(1)');
  $("#ForgotPasswordPage").css('transform', 'scale(0)');
});


$("#btnCancelLogin").click(function () {
  $("#login_page_container").css('transform', 'scale(0)');
  $("#ForgotPasswordPage").css('transform', 'scale(0)');
});


$("#btnRegisterInLoginPage").click(function () {
  $("#login_page_container").css('transform', 'scale(0)');
  $("#ForgotPasswordPage").css('transform', 'scale(0)');

});


$("#btnForgotPW").click(function () {
  $("#login_page_container").css('transform', 'scale(0)');
  $("#ForgotPasswordPage").css('transform', 'scale(1)');

});


$("#btnCancelForgotPW").click(function () {
  $("#login_page_container").css('transform', 'scale(0)');
  $("#ForgotPasswordPage").css('transform', 'scale(0)');
});
*/



initiateUI();

function initiateUI(){
  clearAll();
  $("#hero").css("display","block");
  $("#login_page_container").css("display","block");
  $("#ForgotPasswordPage").css("display","block");

  setTheLastView();
}

function saveLastView(clickedID){
  switch (clickedID){
    case "hero":
      localStorage.setItem("view","HERO");
      break;
    case "login_page_container":
      localStorage.setItem("view","LOGIN");
      break;
    case "ForgotPasswordPage":
      localStorage.setItem("view","FORGOTPASSWORD");
      break;
  }
}

function setTheLastView(){
  let view=localStorage.getItem("view");
  switch (view){
    case "HERO":
      setView($("#hero"));
      break;
    case "LOGIN":
      setView($("#login_page_container"));
      break;
    case "FORGOTPASSWORD":
      setView($("#ForgotPasswordPage"));
      break;
    /*default:
      setView($("#login_page_container"));*/
  }
}

function clearAll(){
  $("#hero").css("display","none");
  $("#login_page_container").css("display","none");
  $("#ForgotPasswordPage").css("display","none");
}

function setView(viewOb){
  clearAll();
  viewOb.css("display","block");
  saveLastView(viewOb.get(0).id);
  console.log(viewOb.get(0).id);
}



$("#btnLogin").click(function () {
  setView($("#login_page_container"));

});


$("#btnCancelLogin").click(function () {
  $("#login_page_container").css("display","none");

});

$("#btnForgotPW").click(function () {
  setView($("#ForgotPasswordPage"));
});

$("#btnCancelForgotPW").click(function () {
  setView($("#login_page_container"));
});

$("#btnResetPW").click(function () {
  setView($("#login_page_container"));
});

$("#home").click(function () {
  setView($("#hero"));

});


