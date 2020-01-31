$(document).ready(function () {
    //hides all the information to each section
    $("#quote1").hide();
    
    $(".quoting1").hover(function () {
        $("#mamba").css("padding", "3%");
        $("#mamba").css("background-color", "white");
        $("#mamba").css("border-radius", "1em")
    });
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $("#mamba").toggle()
        $("#quote1").toggle()
    });
});