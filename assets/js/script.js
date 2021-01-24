var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay);

var currentHr = moment().format('HH');
var currentHrInt = parseInt(currentHr);
var elTextArea = $("textarea");

for (var i = 0; i < elTextArea.length; i++) {
    var $this = $(elTextArea[i]);
    var elTime = parseInt($this.attr("value"));
    var current = localStorage.getItem(elTime);
    $this.val(current);
    if (elTime < currentHrInt) {
        $this.addClass("past");
    } else if (elTime === currentHrInt) {
        $this.addClass("present");
    } else {
        $this.addClass("future");
}};

var elButton = $("button");

elButton.click(function (){
       var btnTime = parseInt($(this).attr("value"));
       var textInput = $(this).parent().siblings("textarea").val();
       localStorage.setItem(btnTime, textInput);
});