

$('#logInCustomer').css('display', 'none');
$('#RegisterPage').css('display', 'none');
$('#RegisterDriver').css('display', 'none');
$('#logInDriver').css('display', 'none');
$('#logInAdmin').css('display', 'none');
$('#ForgotPasswordPage').css('display', 'none');
$('#admin_screen').css('display', 'none');

$("#CustomerDashBoard").css('display', 'none');
$("#moreSpace").css('display', 'none');

$("#nav_bar").css('display', 'block');
$("#banner").css('display', 'block');
$("#services").css('display', 'block');
$("#about_us").css('display', 'block');
$("#featured-car").css('display', 'block');
$("#testimonials").css('display', 'block');
$("#Contact_Page").css('display', 'block');
$("#social_media").css('display', 'block');
$("#footer").css('display', 'block');
$("#income_dashboard").css('display', 'none');

$('#PaymentAddPage').css('transform', 'scale(0)');
$('#CarManagePage').css('transform', 'scale(0)');
$('#DriverManagePage').css('transform', 'scale(0)');
$('#ChangeDriver').css('transform', 'scale(0)');
$('#ReserveDetailsPage').css('transform','scale(0)');
$("#SchedulePageForDriver").css('display', 'none');
$("#Reservation").css('display','none');


function registerToSystem() {
  generateRegisterIds();
  generateUserIds();
  $('#logInCustomer').css('display', 'block');
  $("#nav_bar").css('display', 'block');


  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');
  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');

  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');
  $("#social_media").css('display', 'none');
  $("#footer").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');
  $("#Reservation").css('display','none');
}


function searchSchedule() {
  loadSchedule();
  $("#SchedulePageForDriver").css('display', 'block');
  $("#nav_bar").css('display', 'block');

  $('#logInCustomer').css('display', 'none');
  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');
  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');

  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');
  $("#social_media").css('display', 'none');
  $("#footer").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $("#Reservation").css('display','none');

}

$("#btnLogOutFromDriverSchedule").click(function () {

  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInCustomer').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');
  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');

  $("#nav_bar").css('display', 'block');
  $("#banner").css('display', 'block');
  $("#services").css('display', 'block');
  $("#about_us").css('display', 'block');
  $("#featured-car").css('display', 'block');
  $("#testimonials").css('display', 'block');
  $("#Contact_Page").css('display', 'block');
  $("#social_media").css('display', 'block');
  $("#footer").css('display', 'block');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');
  $("#Reservation").css('display','none');

});


function bookingPage() {

  $("#BookingPage").css('display', 'block');
  $("#nav_bar").css('display', 'none');
  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');
  $("#social_media").css('display', 'none');
  $("#footer").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');

  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInCustomer').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');
  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');
  $("#Reservation").css('display','none');
}



function gotoSeeCars() {
  $("#CustomerDashBoard").css('display', 'block');
  $("#nav_bar").css('display', 'block');
  $("#moreSpace").css('display', 'block');
  $("#social_media").css('display', 'block');
  $("#footer").css('display', 'block');


  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');


  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');


  $("#Reservation").css('display','none');
  $("#BookingPage").css('display', 'none');
  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInCustomer').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');


}
function openBookingPage() {
  generateVReserveIds();


  $("#nav_bar").css('display', 'none');
  $("#Reservation").css('display','block');

  $("#BookingPage").css('display', 'none');
  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInCustomer').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');
  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');


  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');
  $("#social_media").css('display', 'none');
  $("#footer").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');
}



function searchAvailableCars() {
 /* loadAllCarsToDisplay();*/

  $("#nav_bar").css('display', 'block');
  $("#CustomerDashBoard").css('display', 'block');
  $("#moreSpace").css('display', 'block');
  $("#social_media").css('display', 'block');
  $("#footer").css('display', 'block');


  $("#BookingPage").css('display', 'none');
  $("#banner").css('display', 'none');
  $("#services").css('display', 'none');
  $("#about_us").css('display', 'none');
  $("#featured-car").css('display', 'none');
  $("#testimonials").css('display', 'none');
  $("#Contact_Page").css('display', 'none');


  $('#admin_dashboard').css('display', 'block');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');
  $("#Reservation").css('display','none');
}

function gotoMainPage() {
  $('#logInCustomer').css('display', 'none');
  $('#RegisterPage').css('display', 'none');
  $('#RegisterDriver').css('display', 'none');
  $('#logInDriver').css('display', 'none');
  $('#logInAdmin').css('display', 'none');
  $('#ForgotPasswordPage').css('display', 'none');
  $('#admin_screen').css('display', 'none');

  $("#CustomerDashBoard").css('display', 'none');
  $("#moreSpace").css('display', 'none');

  $("#nav_bar").css('display', 'block');
  $("#banner").css('display', 'block');
  $("#services").css('display', 'block');
  $("#about_us").css('display', 'block');
  $("#featured-car").css('display', 'block');
  $("#testimonials").css('display', 'block');
  $("#Contact_Page").css('display', 'block');
  $("#social_media").css('display', 'block');
  $("#footer").css('display', 'block');

  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $("#SchedulePageForDriver").css('display', 'none');
  $("#Reservation").css('display','none');
}


