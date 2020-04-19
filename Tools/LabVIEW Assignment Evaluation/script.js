var EvaluationList = document.getElementById("AssignmentList");

        


GetAssignmentList();

function GetAssignmentList()
{
    var url = 'http://192.168.225.46:8001/LabVIEWTIPSEvaluation/GetAssignments';
    var ReadJSON;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        ReadJSON =  JSON.parse(this.responseText);
        
        UpdateAssignmentList(ReadJSON);
        TestInfo = ReadJSON;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function UpdateAssignmentList(JSON)
{
    for(i in JSON)
    {
        var NewItem = document.createElement("option");
        NewItem.appendChild(document.createTextNode(JSON[i]));
        EvaluationList.appendChild(NewItem);
    }
    
}


EvaluationList.onclick = function() 
{var SelectedAssignment = document.getElementById("AssignmentName")
SelectedAssignment.value = EvaluationList.value
EnDisableSubmit();
};
//assign event handler to browser button
document.getElementById("upload").onchange = function(){EnDisableSubmit();};

function EnDisableSubmit()
{
    if((document.getElementById("AssignmentName").value != null) & (document.getElementById("upload").value != ""))
    { 
      document.getElementById("submit").disabled = false;
    }
    else 
    document.getElementById("submit").disabled = true;
}