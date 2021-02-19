
function populatesite() {
	pullEducation();
	pullWork();
	pullInterests();
	pullProjects();
	pullCommunity();
	pullContact();
	adjustments();
}


function pullEducation() {	
	pullExperience(sitemap.Education, "Education");
}
function pullWork() {	
	pullExperience(sitemap.Employment, "Work");
}
function pullInterests() {	
	pullExperience(sitemap.Interests, "Interests");
}
function pullProjects() {	
	pullExperience(sitemap.Projects, "Projects");
}
function pullCommunity() {	
	pullExperience(sitemap.Community, "Community");
}
function pullContact() {	
	pullExperience(sitemap.Contact, "Contact");
}

function pullExperience(experiences, target) {	
	var container = document.createElement("div");
	container.className = "grid-container container";
	container.id = target+"-grid-container"
	includeShowMoreButton = false;
	for (company in experiences) {
		if (company != "path") {
			var jobcontainer = document.createElement("a");
			jobcontainer.href = domain + experiences[company].path;
			jobcontainer.className = "priority" + experiences[company].priority;
			jobcontainer.className = jobcontainer.className  + " hidden" + experiences[company].hide;
			jobcontainer.className = jobcontainer.className  + " block";
	 
			if (experiences[company].hide == true) {
				includeShowMoreButton = true;
			}
			
			var tag;
			var content;
			
			tag = document.createElement("img");
			tag.src = experiences[company].icon;
			jobcontainer.appendChild(tag);

			
			
			details = document.createElement("div");
			details.className = "details";
			tag = document.createElement("h2");
			content = document.createTextNode(experiences[company].company);
			tag.appendChild(content);
			details.appendChild(tag);
			var list = document.createElement("ul");
			for (job in experiences[company].jobs) {
				tag = document.createElement("li");
				content = document.createTextNode(experiences[company].jobs[job].title);
				tag.appendChild(content);
				list.appendChild(tag);
			}
			details.appendChild(list);
			jobcontainer.appendChild(details);

			container.appendChild(jobcontainer);
		}

	}
	
	if (includeShowMoreButton == true) {
		var showContainer = document.createElement("a");
		showContainer.className = "show-more-button";
		showContainer.id = target+"-show-more-button";
		showContainer.onclick = function() {showmore(target);};
		showContainer.style.display = "flex";

		var more = document.createElement("h2");
		more.className = "show-more";
		var moretext = document.createTextNode("Show More");
		more.appendChild(moretext);
		
		showContainer.appendChild(more);
		
		container.appendChild(showContainer);
		
		showContainer = document.createElement("a");
		showContainer.className = "show-less-button";
		showContainer.id = target+"-show-less-button";
		showContainer.onclick = function() {showless(target);};
		showContainer.style.display = "none";

		var less = document.createElement("h2");
		less.className = "show-less";
		var lesstext = document.createTextNode("Show Less");
		less.appendChild(lesstext);
		
		showContainer.appendChild(less);
		
		container.appendChild(showContainer);
	}
	document.getElementById(target).appendChild(container)	
}

function adjustments(){
	var text = document.createTextNode("A good education is no longer just a pathway to opportunity. It is a prerequisite.");
	var p = document.createElement("p");
	var div = document.createElement("blockquote")
	p.className = "quote mb-0";
	p.appendChild(text);
	div.appendChild(p);
	text = document.createTextNode("Barack Obama");
	p = document.createElement("footer");
	p.appendChild(text);
	p.className = "by blockquote-footer";
	div.appendChild(p);

	div.className = "educationquote blockquote text-center align-middle";
	document.getElementById("Education-grid-container").appendChild(div);
}

function showmore(target){
	document.getElementById(target+"-show-more-button").style.display = "none";
	document.getElementById(target+"-show-less-button").style.display = "flex";
	list = document.getElementById(target).getElementsByClassName("hiddentrue");
	for (var i = 0; i < list.length; i++) {
		list[i].style.display = "flex";
	}
	
}
function showless(target){
	document.getElementById(target+"-show-less-button").style.display = "none";
	document.getElementById(target+"-show-more-button").style.display = "flex";
	list = document.getElementById(target).getElementsByClassName("hiddentrue");
	for (var i = 0; i < list.length; i++) {
		list[i].style.display = "none";
	}
	
}
