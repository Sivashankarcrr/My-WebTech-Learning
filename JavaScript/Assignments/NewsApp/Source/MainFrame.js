var UI_HomeButton = document.getElementById("HomeLink");
var UI_SettingsButton = document.getElementById("SettingsLink");
var UI_Panel = document.getElementsByClassName("Panel");


//UI_HomeButton.addEventListener("click",LoadHome );
//UI_SettingsButton.addEventListener("click", LoadSettings);
//UI_SettingsButton.addEventListener("click", LoadPanel("SettingsPage/Settings.html"));
//UI_SettingsButton.onclick = LoadPanel("SettingsPage/Settings.html");

function LoadHome()
{
    UI_Panel.src = "NewsPage/NewsPage.html";;
}
function LoadSettings()
{
   UI_Panel.src = "SettingsPage/Settings.html";
}


//THis is not at all needed :P 