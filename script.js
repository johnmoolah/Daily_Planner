$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".userInput").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value)

        function hourUpdater() {
            var currentHour = moment().hours();

            $(".time-block").each( function(){
                var blockHour = parseItn($(this).attr("id").split("-")[1]);

                if(blockHour < currentHour) {
                    $(this).add.Class("past")
                }
                else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present")
                }
                else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
        }

        hourUpdater()

        var interval = setInterval(hourUpdater, 15000);

        $("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-10 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-11 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-12 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-13 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-14 .userInput").val(localStorage.getItem("hour-9"));
        $("#hour-15 .userInput").val(localStorage.getItem("hour-9"));
    });
});