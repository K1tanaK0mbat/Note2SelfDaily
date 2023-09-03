// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl=$(".saveBtn");
var today=dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'))





$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButtonEl.on("click", function (){
  var hourId = $(this).closest(".time-block").attr("id");
  var Event = $(this).siblings("textarea").val();
  localStorage.setItem(hourId, Event);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  
  function applyTimeBlockClass(hourId) {
    
    var currentHour = new Date().getHours();

    var blockHour = parseInt(hourId.split("-")[1]);

    if (currentHour > blockHour) {
        $("#" + hourId).addClass("past");
    } else if (currentHour < blockHour) {
        $("#" + hourId).addClass("future");
    } else {
        $("#" + hourId).addClass("present");
    }
}


$(".time-block").each(function () {
  applyTimeBlockClass($(this).attr("id"));
});

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
function pullStorage (){
  saveButtonEl.each(function () {
    var hourId = $(this).closest(".time-block").attr("id"); // Use DOM traversal to get the "hour-x" ID
    var savedEvent = localStorage.getItem(hourId);

    if (savedEvent !== null) {
        $(this).siblings("textarea").val(savedEvent);
    }
});
}

pullStorage();


});
