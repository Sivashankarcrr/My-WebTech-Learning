/***************************************************************************
 * Get All HTML Elements
 ***************************************************************************/

 var UI_Div_ExamInfo = document.getElementById("ExamInfo");
  var UI_b_StartTest = document.getElementById("b_StartTest");
var TestInfo;
var CandidateTestInfo;
var CurrentQuestion;

/***************************************************************************
 * Event Registrations
 ***************************************************************************/
UI_b_StartTest.addEventListener("click", StartTest);
/***************************************************************************
 * Initalization
 ***************************************************************************/
QueryExamInfo();



/***************************************************************************
 * Functions

 ***************************************************************************/   
document.getElementById("div_StartTest").style.display = "none";


 function QueryExamInfo()
{
    var url = 'http://127.0.0.1:8001/SolitonCodingContest/TestPage/TestInformation';
    var ReadJSON;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        ReadJSON =  JSON.parse(this.responseText);
        
        updateExamInfo(ReadJSON);
        TestInfo = ReadJSON;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function updateExamInfo( JSON)
{
  document.getElementById("ExamName").innerHTML = "Exam Name:" + JSON.TestName;
  document.getElementById("ExamDescription").innerHTML = "Description :"+JSON.Description;
  document.getElementById("ExamState").innerHTML = "State :"+JSON.Status;
 
  if(JSON.Status == "In Progress")
  {
    QueryTestInfo();
  }


}

function QueryTestInfo()
{
  var url = 'http://127.0.0.1:8001/SolitonCodingContest/TestPage/TestCurrentStatus';
    var ReadJSON;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        ReadJSON =  JSON.parse(this.responseText);
        CandidateTestInfo = ReadJSON;
        UpdateTestInfo(ReadJSON);

      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function UpdateTestInfo(JSON)
{
  if(JSON.State == "LoggedIn")
  {  document.getElementById("div_StartTest").style.display = "block";
  }
  else
  {getQuestion();}
  document.getElementById("Score").innerHTML = "Score :" + findscore();
  
  function findscore() 
  { var sum = 0;
    for(i in JSON.QStates)
    {if(JSON.QStates[i]=="Completed")
    {sum = sum +JSON.Score[i]}
    }
    return sum;
  }
}


function StartTest()
{
  var url ='http://127.0.0.1:8001/SolitonCodingContest/TestPage/StartTest';
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  window.location.reload();
  
  
}

function getQuestion()
{
  
  var url ='http://127.0.0.1:8001/SolitonCodingContest/TestPage/GetQuestion?qID=';
  var qID = CandidateTestInfo.CurrentQID;
  url = url + qID
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      ReadJSON =  JSON.parse(this.responseText);
      CurrentQuestion = ReadJSON;
      UpdateQuestion(ReadJSON);
    }
  };
 
}

function UpdateQuestion(JSON)
{
  document.getElementById("QuestionName").innerHTML =  JSON.QuestionTitle;
  document.getElementById("QuestionDetails").innerHTML = JSON.Question;
  
  var B_Next = document.createElement("button");
  var Placholder = document.getElementById("NextButtonPlaceholder")
  B_Next.innerHTML = "Next"
  B_Next.addEventListener("click",getNextQuestion)
  Placholder.appendChild(B_Next);
  
}
function getNextQuestion()
{
  var url ='http://127.0.0.1:8001/SolitonCodingContest/TestPage/NextQuestion';
  
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  window.location.reload();
}
