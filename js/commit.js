$(document).ready(function () {
    //hides all the information to each section
    $("#quote1").hide();
    
    $(".subject3").hover(function () {
        $(".subject3").css("color", "black");
        $(".subject3").css("background-color", "dodgerblue");
    });
    
    //toggles information based on click
    $(".quote1").click(function () {
        $("#mamba").toggle()
        $("#quote1").toggle()
    });
});