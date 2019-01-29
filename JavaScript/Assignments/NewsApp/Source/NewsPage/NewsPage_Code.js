
/***************************************************************************
 * Get All HTML Elements
 ***************************************************************************/

 var UI_NewsHeading = document.getElementById("NewsTopic");
 var UI_NewsContent = document.getElementById("NewsContent");
 var UI_NewsImage   = document.getElementById("NewsImage");
 var UI_NextNewsButton = document.getElementById("But_NextNews")
 var UI_PrevNewsButton = document.getElementById("But_PrevNews");
 var Searchbuttons = document.getElementsByClassName("SearchButtons");

/***************************************************************************
 * Event Registrations
 ***************************************************************************/

 UI_NextNewsButton.addEventListener("click", UpdateNextNews);
 UI_PrevNewsButton.addEventListener("click", UpdatePrevNews);
 //document.getElementById("SearchButtons").addEventListener("click", HandleSearchButtons);
 for (var i = 0; i < Searchbuttons.length; i++) {
     Searchbuttons[i].onclick = HandleSearchButtons;
   }
 
/***************************************************************************
 * Global Variables
 ***************************************************************************/

   var NewsJSON;
   var MaxNumNews = 20;
   var CurrentNewsIndex = 0;
   var url = 'https://newsapi.org/v2/top-headlines?' +
             'country=in&' +
             'apiKey=2874d3ef7bff4fc7bb5bf51cc1d27576';

/***************************************************************************
 * Initalization
 ***************************************************************************/

QueryNews(url);
/***************************************************************************
 * Functions
 ***************************************************************************/   
   
   function QueryNews(url)
   {
   var req = new Request(url);
   var ReceivedString;
   var ReceivedPromise;
   
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
   }
   
   



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
    CurrentNewsIndex = (CurrentNewsIndex+1)%MaxNumNews;
    UpdateNews();
}
function UpdatePrevNews()
{
    CurrentNewsIndex = (CurrentNewsIndex-1);
    if(CurrentNewsIndex <0)
    {CurrentNewsIndex = MaxNumNews-1;}
    UpdateNews();
}

function UpdateNewsBySearch(str)
{ 
    var url = 'https://newsapi.org/v2/everything?' +
          'q='+str+'&' +
          'apiKey=2874d3ef7bff4fc7bb5bf51cc1d27576';

QueryNews(url)
}

function HandleSearchButtons(e)
{   
    for(i=0;i<Searchbuttons.length;i++)
    {
        Searchbuttons[i].classList.remove("buttonSelection");
        Searchbuttons[i].classList.add("button");
    }
    e.target.classList.add("buttonSelection");
    
    str = e.target.innerHTML;
    UpdateNewsBySearch(str);
}

//Initialize_FirstNews(ReceivedNews);