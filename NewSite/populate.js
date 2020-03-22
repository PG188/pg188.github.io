
var workExperiences = {
	"gdms" : {
		"company": "General Dynamics Mission Systems",
		"icon": "assets/icons/work/gdms/logo.jpg",
		"ref": "",
		"priority": "2",
		"jobs" : [
			{
				"title": "Software CO-OP Student",
				"start": "",
				"stop": ""
			}
		]
	},
	"mcmaster" : {
		"company": "McMaster University",
		"icon": "assets/icons/work/mcmaster/logo.jpg",
		"ref": "",
		"priority": "1",
		"jobs" : [
			{
				"title": "Teaching Assistant",
				"start": "",
				"stop": ""
			},
			{
				"title": "Research Assistant",
				"start": "",
				"stop": ""
			},
			{
				"title": "Special Projects Assistant",
				"start": "",
				"stop": ""
			}
		]
	},
	"thales" : {
		"company": "THALES Transportation Canada",
		"icon": "assets/icons/work/thales/logo.jpg",
		"ref": "",
		"priority": "2",
		"jobs" : [
			{
				"title": "Software Developer CO-OP",
				"start": "",
				"stop": ""
			},
			{
				"title": "Junior Software Developer CO-OP",
				"start": "",
				"stop": ""
			}
		]
	},
	"capreit" : {
		"company": "CAPREIT",
		"icon": "assets/icons/work/capreit/logo.jpg",
		"ref": "",
		"priority": "1",
		"jobs" : [
			{
				"title": "IT Summer Student",
				"start": "",
				"stop": ""
			},
			{
				"title": "IT Summer Student",
				"start": "",
				"stop": ""
			}
		]
	},
	"ctw" : {
		"company": "Children's Technology Workshop",
		"icon": "assets/icons/work/ctw/logo.jpg",
		"ref": "",
		"priority": "1",
		"jobs" : [
			{
				"title": "Camp Instructor",
				"start": "",
				"stop": ""
			},
			{
				"title": "Camp Instructor",
				"start": "",
				"stop": ""
			}
		]
	},
	"torontostar" : {
		"company": "The Toronto Star",
		"icon": "assets/icons/work/torontostar/logo.jpg",
		"ref": "",
		"priority": "1",
		"jobs" : [
			{
				"title": "Sales",
				"start": "",
				"stop": ""
			}
		]
	}
};

var Interests = {
	"origami" : {
		"company": "Origami",
		"icon": "assets/icons/interest/origami/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"travel" : {
		"company": "Travelling",
		"icon": "assets/icons/interest/travel/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"robotics" : {
		"company": "Robotics",
		"icon": "assets/icons/interest/robotics/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"photography" : {
		"company": "Photography",
		"icon": "assets/icons/interest/photography/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"axes" : {
		"company": "Axe Throwing",
		"icon": "assets/icons/interest/axes/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"cooking" : {
		"company": "Cooking",
		"icon": "assets/icons/interest/cooking/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"gardening" : {
		"company": "Gardening",
		"icon": "assets/icons/interest/gardening/logo.jpg",
		"ref": "",
		"priority": "1"
	}
};

var Projects = {
	"distrist" : {
		"company": "FIRST District Organisation",
		"icon": "assets/icons/project/district/logo.jpg",
		"ref": "",
		"priority": "2"
	},
	"website" : {
		"company": "Personal Website",
		"icon": "assets/icons/project/website/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"quadcopter" : {
		"company": "Quadcopter Design",
		"icon": "assets/icons/project/quadcopter/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"hyperloop" : {
		"company": "McMaster Hyperloop",
		"icon": "assets/icons/project/hyperloop/logo.jpg",
		"ref": "",
		"priority": "2"
	},
	"ecocar" : {
		"company": "EcoCAR3",
		"icon": "assets/icons/project/ecocar/logo.jpg",
		"ref": "",
		"priority": "2"
	},
	"formulahybrid" : {
		"company": "Formula Hybrid",
		"icon": "assets/icons/project/formulahybrid/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"strangers" : {
		"company": "Strangers",
		"icon": "assets/icons/project/strangers/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"quadsim" : {
		"company": "QuadSim",
		"icon": "assets/icons/project/quadsim/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"sumobot" : {
		"company": "Sumobot",
		"icon": "assets/icons/project/sumobot/logo.jpg",
		"ref": "",
		"priority": "2"
	},
	"class" : {
		"company": "Class Projects",
		"icon": "assets/icons/project/class/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"first" : {
		"company": "FIRST Robotics",
		"icon": "assets/icons/project/first/logo.jpg",
		"ref": "",
		"priority": "3"
	},
	"f1" : {
		"company": "F1 in schools",
		"icon": "assets/icons/project/f1/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"vex" : {
		"company": "VEX Robotics",
		"icon": "assets/icons/project/vex/logo.jpg",
		"ref": "",
		"priority": "1"
	},
	"skills" : {
		"company": "Skills Robotics",
		"icon": "assets/icons/project/skills/logo.jpg",
		"ref": "",
		"priority": "1"
	},
};


var domain = "test";


function pullWorkExperience() {	
	pullExperience(workExperiences, "Work");
}
function pullInterests() {	
	pullExperience(Interests, "Interests");
}
function pullProjects() {	
	pullExperience(Projects, "Projects");
}

function pullExperience(experiences, target) {	
	var container = document.createElement("div");
	container.className = 'grid-container';
	for (company in experiences) {
		var jobcontainer = document.createElement("a");
		jobcontainer.href = domain + experiences[company].ref;
		jobcontainer.className = "priority" + experiences[company].priority;
		
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

	
	document.getElementById(target).appendChild(container)



	
}