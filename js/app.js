// function to get the date inside the modal

$(function () {
  $("#datepicker").datepicker();
});

// header section

let datetimeEl = $("#date-time");
// datetimeEl.text(today.format("MMM Do, YYYY"));

// update seconds every 60 seconds

setInterval(() => {
  datetimeEl.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);
