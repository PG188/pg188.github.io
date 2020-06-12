var BTN_1 = document.getElementById('Projects-show-more-button');
var BTN_1 = document.getElementById('Projects-show-more-button');
var BTN_2 = document.getElementById('Projects-show-less-button');

//Just hide element
function JustHide(){
	document.getElementsByClassName("hiddentrue").style.display = "none"; 
	}

//Just show element
function JustShow(){ 
	document.getElementsByClassName("hiddentrue").style.display = "flex"; 
	} 


function Listen(){
	
	BTN_1.onclick = JustHide; //Start action on click
	BTN_1.id = "test"; //Start action on click
	BTN_2.onclick = JustShow; //Start action on click

}

