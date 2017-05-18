// getting May 1st date
var now = Date.now();
var mayFirst = new Date(2012, 4, 1);
// set variables
var numberInitialTabs = mayFirst.getDay();
var lastDayMay = new Date(2012, 4, 0);
var numberDaysInMonth = lastDayMay.getDate() + 1;
// print calendar framing
var calendarRows = [
  "\t\t\tMay 2012\t\t\t",
  "",
  "Su\tMo\tTu\tWe\tTh\tFr\tSa",
];

var firstWeek = "";
var currentDay = 1;
// gets first week
for (var i = 1; i <= 7; i++) {
  if (numberInitialTabs > 0) {
    firstWeek += "\t";
    numberInitialTabs -= 1;
  } else {
    firstWeek += currentDay + "\t";
    currentDay += 1;
  }
}
calendarRows.push(firstWeek);
// while loop provides the rest
while (currentDay <= numberDaysInMonth) {
  var newWeek = "";
  for (var i = 1; i <= 7; i++) {
      if (currentDay > numberDaysInMonth) {
        newWeek += "\t";
      } else {
        newWeek += currentDay + "\t";
      }
      currentDay ++;
  }
      calendarRows.push(newWeek);
}

for (var i = 0; i < calendarRows.length; i++) {
  console.log(calendarRows[i]);
}
