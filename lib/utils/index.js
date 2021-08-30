"use strict";

var polyfill = {
  Object: {
    entries: function entries() {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }
    }
  }
};

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
  polyfill: polyfill,
  getFullDate: getFullDate
};