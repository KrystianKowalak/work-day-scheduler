// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayDate() {
  let dateString = dayjs().format('dddd, MMMM D');
  let displayDate;

  switch (dayjs().date()) {
    case 1:
    case 21:
    case 31:
      displayDate = dateString + "st";
      return displayDate;
    case 2:
    case 22:
      displayDate = dateString + "nd";
      return displayDate;
    case 3:
    case 23:
      displayDate = dateString + "rd";
      return displayDate;
    default:
      displayDate = dateString + "th";
      return displayDate;
  }
};

function setSchedulerClass() {
  let $timeBlock = $('.time-block');
  let $time = $timeBlock.find('.hour');

  for(let i = 0; i < $timeBlock.length; i++) {
    let time = dayjs($time.eq(i).text(), "ha");
    if (dayjs().isBefore(time, 'hour')) {
      $timeBlock.eq(i).addClass('future');
    } else if (dayjs().isSame(time, 'hour')) {
      $timeBlock.eq(i).addClass('present');
    } else {
      $timeBlock.eq(i).addClass('past');
    }
  }
};

function saveWork() {

};

function loadWork() {

};

$(function () {
  //console.log(dateTime.isBefore("3", "hour"));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#currentDay").text(displayDate());
  setSchedulerClass();
});
