

$('#admin_dashboard').css('display', 'block');
$("#car_dashboard").css('display', 'none');
$("#driver_dashboard").css('display', 'none');
$("#customer_dashboard").css('display', 'none');
$("#reservation_dashboard").css('display', 'none');
$("#payment_dashboard").css('display', 'none');
$("#income_dashboard").css('display', 'none');
$('#admin_profile').css('display', 'none');
$("#schedule_dashboard").css('display', 'none');

$("#btn_dashboard").click(function(){
  $('#admin_dashboard').css('display', 'block');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');


  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');

});


$("#btn_profile").click(function (){
  $('#admin_profile').css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btn_car").click(function(){
  $("#car_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
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
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btn_driver").click(function(){
  $("#driver_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btn_customer").click(function(){
  $("#customer_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
});


$("#btn_reservation").click(function(){
  $("#reservation_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
});

$("#btnExistReDetails").click(function () {
  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');


  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
  $('#ReserveDetailsPage').css('transform','scale(0)');
});


$("#btn_payment").click(function(){
  $("#payment_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btn_shedule").click(function () {

  $("#schedule_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btn_income").click(function () {
  $("#income_dashboard").css('display', 'block');
  $('#admin_dashboard').css('display', 'none');
  $("#car_dashboard").css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});



$("#btnAddCar").click(function (){

  $('#CarManagePage').css('transform', 'scale(1)');
  $("#car_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btnCancelAddCar").click(function () {

  $('#CarManagePage').css('transform', 'scale(0)');
  $("#car_dashboard").css('display', 'block');

  $('#admin_dashboard').css('display', 'none');
  $("#driver_dashboard").css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btnAddDriver").click(function () {

  $('#DriverManagePage').css('transform', 'scale(1)');
  $("#driver_dashboard").css('display', 'block');

  $("#car_dashboard").css('display', 'none');
  $('#admin_dashboard').css('display', 'none');

  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');
  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#CarManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');
});


$("#btnCancelAddDriver").click(function () {


  $('#CarManagePage').css('transform', 'scale(0)');
  $("#driver_dashboard").css('display', 'block');

  $("#car_dashboard").css('display', 'none');
  $('#admin_dashboard').css('display', 'none');
  $("#customer_dashboard").css('display', 'none');
  $("#reservation_dashboard").css('display', 'none');
  $("#payment_dashboard").css('display', 'none');
  $("#schedule_dashboard").css('display', 'none');

  $("#income_dashboard").css('display', 'none');
  $('#admin_profile').css('display', 'none');

  $('#DriverManagePage').css('transform', 'scale(0)');
  $('#ChangeDriver').css('transform', 'scale(0)');
  $('#PaymentAddPage').css('transform', 'scale(0)');

});
