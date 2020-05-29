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

timeBlockHours = [09,10,11,12,13,14,15,16,17];
timeBlockTimes = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];

//Code a for loop that will render the timeblocks onto the page

for (i=0; i<timeBlockHours.length; i++) {
    var timeBlock = $("<div>");
    timeBlock.attr("id", "hour-" + timeBlockHours[i]);
    timeBlock.attr("class", "row time-block");
    timeBlock.attr("data-number", timeBlockHours[i]);
    $(".container").append(timeBlock);

    var hourBlock = $("<div>");
    hourBlock.attr("class", "col-1 hour");
    hourBlock.text(timeBlockTimes[i]);
    timeBlock.append(hourBlock);

    var textArea = $("<textarea>");
    textArea.attr("class", "col-10 description");
    timeBlock.append(textArea);

    var saveButton = $("<button>");
    saveButton.attr("class", "btn saveBtn col-1");
    timeBlock.append(saveButton);

    var saveIcon = $("<icon>");
    saveIcon.attr("class", "fa fa-unlock");
    saveButton.append(saveIcon);

}

//Create code that will check current time against timeBlockHour//convert 
for (i=0; i<timeBlockHours.length; i++) {

var specificBlock = $("#hour-"+timeBlockHours[i]);
var hourData = specificBlock.attr("data-number");
console.log($("#hour-"+timeBlockHours[i]).attr("data-number"));

console.log($("#hour-"+timeBlockHours[0]))


if (hourData < currentHour) {
    specificBlock.css("background-color", "#B4BBBB");
}
else if (hourData > currentHour) {
    specificBlock.css("background-color", "#AEEF95");
}
else if  (hourData = currentHour) {
    specificBlock.css("background-color", "#FF8370");

}
}

//if currentTime<timeBlockHour: future;
//if currentTime=timeBlockHour: presenet;
//if currentTime>timeBlockHour: past;

//Create on "click" event that will change lock icon and save text

$(".saveBtn").on("click", function() {
    var buttonState = $(this).children().attr("class");

    if(buttonState==="fa fa-lock") {
        $(this).children().attr("class", "fa fa-unlock")
    }
    else {
        $(this).children().attr("class", "fa fa-lock")
    }

});
})