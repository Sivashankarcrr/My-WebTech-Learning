var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(i = 1; i<5; i++)
{
  xxx = "images/pic"+i+".jpg"
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);
  newImage.setAttribute('OnClick', "SetDisplayImage(src)");
}

function SetDisplayImage(sourcename)
{
  var MainDisplay = document.querySelector('.displayed-img');
  MainDisplay.setAttribute('src', sourcename);
}
/* Wiring up the Darken/Lighten button */
var DarkenFlag = 0;
function HandleDarkenButton()
{
  var AllItems = document.getElementsByClassName('overlay');
 var CurDiv = AllItems[0];
  if(DarkenFlag == 0)
  {
    //CurDiv.setAttribute("background-color", "rgba(0,0,0,50)"); - See why this is not working???
    CurDiv.style.backgroundColor = "rgba(0,0,0,0.5)";
    DarkenFlag = 1;
  }
  else
  {
    //CurDiv.setAttribute("backgroundColor", "rgba(0,0,0,0)");
    CurDiv.style.backgroundColor = "rgba(0,0,0,0)";
    DarkenFlag = 0;
  }

  var ButtonRefs = document.getElementsByClassName('dark');
  var BTNRef = ButtonRefs[0];//since only one button is present
  if (DarkenFlag == 1)
  BTNRef.textContent = "Lighten";
  else
  BTNRef.textContent = "Darken";
}


