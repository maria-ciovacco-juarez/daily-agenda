$(document).ready(function () {
  // Set today's date in the header
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));

  // the background color for current time
  var currentHour = dayjs().hour();
  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Save button and local storage
  $('.saveBtn').click(function () {
    var description = $(this).siblings('.description').val().trim();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, description);
  });

  // the saved input from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});

