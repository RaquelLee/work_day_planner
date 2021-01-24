var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay);

var currentHr = moment().format('HH');
var currentHrInt = parseInt(currentHr)
var elTextArea = $("textarea");