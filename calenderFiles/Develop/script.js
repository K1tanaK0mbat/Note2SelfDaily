// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl=$(".saveBtn");
var noteInputEl=$("textarea");
var today=dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'))

var hour9=dayjs().hour(9).format('hh');
$('#hour-9').text(hour9+" AM");
var hour10=dayjs().hour(10).format('hh');
$('#hour-10').text(hour10+" AM");
var hour11=dayjs().hour(11).format('hh');
$('#hour-11').text(hour11+" AM");



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    var noteInput=noteInputEl.val();
    localStorage.setItem("event",noteInput);

  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

var now=dayjs().hour();
var eventTime=dayjs(hour9);
  var rowEl=$('#hour-9')
  if (eventTime.isBefore(now)) {
    rowEl.addClass('past');
  } else if (eventTime.isSame(now)) {
    rowEl.addClass('present');
  } else if(eventTime.isAfter(now)){
    rowEl.addClass('future')
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
