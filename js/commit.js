var count = 1;

$(document).ready(function () {
    //hides all the information to each section
    $(".quote1").hide();
    
    $("#text").html(texts[0]);
    
    $("#head").click(function () {
        slideShowText();
    });
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $(".mamba").toggle();
        $(".quote1").toggle();
    });
});

function slideShowText() {
    if(count == 1){
        $("#text").html(texts[1]);
        count++;
    }
    else if(count == 2){
        $("#text").html(texts[2]);
        count++;
    }
    else if(count == 3){
        $("#text").html(texts[3]);
        count++;
    }
    else if(count == 4){
        $("#text").html(texts[4]);
        count++;
    }
    else if(count == 5){
        $("#text").html(texts[0]);
        count = 1;
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