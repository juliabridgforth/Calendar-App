$(document).ready(function(){

    
//Adding the current day to the top of the page
var currentDayEl = $("#currentDay");
var today = moment().format('LL');
currentDayEl.append(today);


//Create a currentTime variable
//Create a currentHour variable to check against the time-block hour

var currentTime = moment().format('LT');
console.log(currentTime);

var currentHour = moment().format('HH');
console.log("Current Hour:" + moment().format('HH'));
console.log(currentHour);

//Create an array of the hours
//Create an array of times

timeBlockHours = [9,10,11,12,13,14,15,16,17];
timeBlockTimes = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];

//Code a for loop that will render the timeblocks onto the page

for (i=0; i<timeBlockHours.length; i++) {
    var index = i;

    var timeBlock = $("<div>");
    timeBlock.attr("id", "hour-" + timeBlockHours[i]);
    timeBlock.attr("class", "row time-block");
    timeBlock.attr("data-number", timeBlockHours[i]);
    $(".container").append(timeBlock);

    var hourBlock = $("<div>");
    hourBlock.attr("class", "col-md-1 hour");
    hourBlock.text(timeBlockTimes[i]);
    timeBlock.append(hourBlock);

    var textArea = $("<textarea>");
    textArea.attr("class", "col-md-10 description");
    textArea.attr("id", "input-" + index);
    timeBlock.append(textArea);

    var saveButton = $("<button>");
    saveButton.attr("class", "btn saveBtn col-md-1");
    saveButton.attr('id',`saveid-${index}`);
    saveButton.attr("data-id", index);
    timeBlock.append(saveButton);

    var saveIcon = $("<icon>");
    saveIcon.attr("class", "fa fa-unlock");
    saveButton.append(saveIcon);

}

//Create code that will check current time against timeBlockHour//convert 
for (i=0; i<timeBlockHours.length; i++) {

var specificBlock = $("#hour-"+timeBlockHours[i]);
var hourData = parseInt(specificBlock.attr("data-number"));
console.log($("#hour-"+timeBlockHours[i]).attr("data-number"));

console.log($("#hour-"+timeBlockHours[0]))

//if currentTime<timeBlockHour: future;
//if currentTime=timeBlockHour: presenet;
//if currentTime>timeBlockHour: past;

if (hourData < currentHour) {
    specificBlock.css("background-color", "#B4BBBB");
}
else if (hourData > currentHour) {
    specificBlock.css("background-color", "#AEEF95");
}
else if (hourData = currentHour) {
    specificBlock.css("background-color", "#FF8370");

};
}

//this is the function the will render the local storage to the page
var storedPlans = [];

init ();

function renderStoredPlans() {

        eventLog = storedPlans;
    
  }

  function init (){
    var plansFromStorage = JSON.parse(localStorage.getItem("storedPlans"));
    if (plansFromStorage) {  
    storedPlans = plansFromStorage;
  }
  }

//Create on "click" event that will change lock icon and save text to local storage


$(".saveBtn").on("click", function() {
    var buttonState = $(this).children().attr("class");
    //console.log($(".description").val());
    
        console.log($(this));
        var index= $(this).attr('data-id');
        console.log(index);
        var inputId = '#input-'+ index;
        console.log(inputId);
        var value = $(inputId).val();
        console.log(value);

        var eventLog = value;



    if(buttonState==="fa fa-unlock") {
        $(this).children().attr("class", "fa fa-lock");
        localStorage.setItem("storedPlans", JSON.stringify(eventLog));
    }
    else {
        $(this).children().attr("class", "fa fa-unlock");

        //localStorage.setItem("description", eventDescription);
        //console.log($(".description")[0].val());

    }

});

renderStoredPlans();

})
