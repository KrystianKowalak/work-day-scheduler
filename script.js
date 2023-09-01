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
  let timeBlock = $('.time-block');
  let timeText = timeBlock.find('.hour');

  for(let i = 0; i < timeBlock.length; i++) {
    let time = dayjs(timeText.eq(i).text(), "ha");
    if (dayjs().isBefore(time, 'hour')) {
      timeBlock.eq(i).addClass('future');
    } else if (dayjs().isSame(time, 'hour')) {
      timeBlock.eq(i).addClass('present');
    } else {
      timeBlock.eq(i).addClass('past');
    }
  }
};

function loadWork() {
  let timeBlock = $(".time-block")

  for(let i = 0; i < timeBlock.length; i++) {
    timeBlock.eq(i).find(".description").val(localStorage.getItem(timeBlock.eq(i).attr("id")))
  }
};

function saveWork(event) {
  let timeBlock = $(this.parentElement);
  localStorage.setItem(timeBlock.attr("id"), timeBlock.find('.description').val())
};

$(function () {
  $("#currentDay").text(displayDate());
  setSchedulerClass();
  loadWork();
  $(".saveBtn").on('click', saveWork);
});
