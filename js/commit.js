$(document).ready(function () {
    //hides all the information to each section
    $(".quote1").hide();
    
    $(".quoting1").hover(function () {
        $("#mambaPic").css("padding", "3%");
        $("#mambaPic").css("background-color", "white");
        $("#mambaPic").css("border-radius", "1em");
    });
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $(".mamba").toggle();
        $(".quote1").toggle();
    });
});