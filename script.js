//Adding the current day to the top of the page
var currentDayEl = $("#currentDay");
var today = moment().format('LL');

//Create a currentTime variable
//Create a currentHour variable to check against the time-block hour

var currentTime = moment().format('LT');
console.log(currentTime);

var currentHour = moment().format('h');
console.log(moment().format('h'));

//Create an array of the hours
//Create an array of times

timeBlockHours = [9,10,11,12,13,14,15,16,17];
timeBlockTimes = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];

//Code a for loop that will render the timeblocks onto the page

for (i=0; i<timeBlockHours.length; i++) {
    var timeBlock = $("<div>");
    timeBlock.attr("id", "hour-" + timeBlockHours[i]);
    timeBlock.attr("class", "row time-block");
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
    saveButton.attr();
    timeBlock.append(saveButton);

}

//Create code that will check current time against timeBlockHour

//if currentTime<timeBlockHour: future;
//if currentTime=timeBlockHour: presenet;
//if currentTime>timeBlockHour: past;

//Create code that will save the text input when you click the button
//Create code that will animate the button from unlocked to locked


