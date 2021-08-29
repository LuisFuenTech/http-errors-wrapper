"use strict";

var getFullDate = function getFullDate() {
  var padZero = function padZero(number) {
    return number >= 0 && number < 10 ? "0" + number : number;
  };

  var date = new Date();
  var numberMonth = date.getMonth() + 1;
  var numberHours = date.getHours();
  var numberMinutes = date.getMinutes();
  var numberSeconds = date.getSeconds();
  var numberday = date.getDate();
  var year = date.getFullYear();
  var day = padZero(numberday);
  var month = padZero(numberMonth);
  var hours = padZero(numberHours);
  var minutes = padZero(numberMinutes);
  var seconds = padZero(numberSeconds);
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
};

module.exports = {
  getFullDate: getFullDate
};