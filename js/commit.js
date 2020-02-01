$(document).ready(function () {
    //hides all the information to each section
    $(".quote1").hide();
    
    //toggles information based on click
    $(".quoting1").click(function () {
        $(".mamba").toggle();
        $(".quote1").toggle();
    });
    
    
    
});

function retrieve() {
    var url = new URL('https://www.googleapis.com/youtube/v3/search');
    
    var params = {
        q: "boston dynamics",
        part: 'snippet',
        maxResults: 11,
        key: "AIzaSyBsObOCPoImQ85Z0blZk0pxIXJlEz6XaiY"
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