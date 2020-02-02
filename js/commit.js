var texts = ["The most important thing is to try and inspire people so that they can be great in whatever they want to do.", "I'm reflective only in the sense that I learn to move forward. I reflect with a purpose.", "I have self-doubt. I have insecurity. I have fear of failure. I have nights when I show up at the arena and I'm like, 'My back hurts, my feet hurt, my knees hurt. I don't have it. I just want to chill.' We all have self-doubt. You don't deny it, but you also don't capitulate to it. You embrace it.", "I don't want to be the next Michael Jordan, I only want to be Kobe Bryant.", "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you."]

var count = 1;

$(document).ready(function () {
    //hides all the information to each section
    $(".quote1").hide();
    
    $("#text").html(texts[0]);
    
    $("#t1").click(function () {
        slideShowTextBackward();
    });
    
    $("#t2").click(function () {
        slideShowTextForward();
    });
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $(".mamba").toggle();
        $(".quote1").toggle();
    });
});

function slideShowTextForward() {
    if(count == 1){
        $("#text").html(texts[1]);
        count++;
    }
    if(count == 2){
        $("#text").html(texts[2]);
        count++;
    }
    if(count == 3){
        $("#text").html(texts[3]);
        count++;
    }
    if(count == 4){
        $("#text").html(texts[4]);
        count++;
    }
    if(count == 5){
        $("#text").html(texts[0]);
        count = 1;
    }
}

function slideShowTextBackward() {
    if(count == 1){
        $("#text").html(texts[4]);
        count == 5;
    }
    if(count == 2){
        $("#text").html(texts[0]);
        count--;
    }
    if(count == 3){
        $("#text").html(texts[1]);
        count--;
    }
    if(count == 4){
        $("#text").html(texts[2]);
        count--;
    }
    if(count == 5){
        $("#text").html(texts[3]);
        count--;
    }
}

function retrieve() {
    var url = new URL('https://www.googleapis.com/youtube/v3/search');
    
    var params = {
        q: "kobe bryant's best 100 plays of his career",
        part: 'snippet',
        maxResults: 11,
        key: "N/A"
    }

    url.search = new URLSearchParams(params);

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        showResults(data);
    })
    .catch(err => {
        console.log("Error!");
    })
}

function showResults (response) {
    console.log(response);
    var results = response.items;
    document.getElementById("vid").innerHTML="";
    for(i=1;i<2;i++){
        var id= results[i].id.videoId;
        var video = '<p><iframe class="video-result" width="1000" height="562" src="https://www.youtube.com/embed/' + id + '" frameborder="0"></p>';
        document.getElementById("vid").innerHTML+=video;
    }
}

retrieve();