var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2874d3ef7bff4fc7bb5bf51cc1d27576';
var req = new Request(url);
var ReceivedString;
var ReceivedPromise;
var NewsJSON;
fetch(req)
    .then(function(ReceivedString) {
        //console.log(ReceivedNews)//.json() .then(function assign(str){}));       
        ReceivedPromise = ReceivedString.json();
        Promise.resolve(ReceivedPromise) 
            .then(
                function(value)
                    {NewsJSON = value;
                     Initialize_FirstNews(NewsJSON);
                    }
                )
    })

 var UI_NewsHeading = document.getElementById("NewsTopic");
 var UI_NewsContent = document.getElementById("NewsContent");
 var UI_NewsImage   = document.getElementById("NewsImage");
 var UI_NextNewsButton = document.getElementById("But_NextNews")

 var CurrentNewsIndex = 0;

 function Initialize_FirstNews(NewsJSON)
{
    CurrentNewsIndex = 0;
    UpdateNews();
}


function UpdateNews()
 {
    UI_NewsHeading.innerHTML = NewsJSON.articles[CurrentNewsIndex].title;
    UI_NewsContent.innerHTML = NewsJSON.articles[CurrentNewsIndex].description;
    UI_NewsImage.src = NewsJSON.articles[CurrentNewsIndex].urlToImage;
    //console.log(NewsJSON.json())
}
function UpdateNextNews()
{
    CurrentNewsIndex = CurrentNewsIndex+1;
    UpdateNews();
}

UI_NextNewsButton.addEventListener("click", UpdateNextNews);

//Initialize_FirstNews(ReceivedNews);