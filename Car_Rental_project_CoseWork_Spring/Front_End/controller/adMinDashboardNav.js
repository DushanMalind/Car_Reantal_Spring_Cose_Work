

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
});
