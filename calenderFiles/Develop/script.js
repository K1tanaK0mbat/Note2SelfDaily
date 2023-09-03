
var saveButtonEl=$(".saveBtn");
var today=dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'))
var message = $("#message")
var text=$('textarea')




$(function () {

  saveButtonEl.on("click", function (Events){
  var hourId = $(this).closest(".time-block").attr("id");
  var Events = $(this).siblings("textarea").val();
  localStorage.setItem(hourId, Events);
  message.removeClass("Invisible");
  setTimeout(function () {
      message.addClass("Invisible");
  }, 900);
  });

  
  function applyClass(hourId) {
    
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
  applyClass($(this).attr("id"));
});


function pullStorage (){
  saveButtonEl.each(function () {
    var Ids = $(this).closest(".time-block").attr("id"); 
    var saved = localStorage.getItem(Ids);

    if (saved) {
        $(this).siblings("textarea").val(saved);

    }
});
}

pullStorage();


});
