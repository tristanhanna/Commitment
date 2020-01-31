$(document).ready(function () {
    //hides all the information to each section
    $(".quote1").hide();
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $(".mamba").toggle();
        $(".quote1").toggle();
    });
});