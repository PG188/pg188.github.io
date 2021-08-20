function addMenubar() {

var nav
var link
var button
var span

nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-dark bg-primary sticky-top";
link = document.createElement("a"); 
link.className = "navbar-brand";
link.href = domain +  "#";
link.innerHTML = "Prakhar Garg"

button = document.createElement("button"); 
button.className = "navbar-toggler";
button.setAttribute("type","button");
button.setAttribute("data-toggle","collapse");
button.setAttribute("data-target","#navbarSupportedContent");
button.setAttribute("aria-controls","navbarSupportedContent");
button.setAttribute("aria-expanded","false");
button.setAttribute("aria-label","Toggle navigation");

span = document.createElement("span"); 
span.className = "navbar-toggler-icon";

button.appendChild(span);

nav.appendChild(link);
nav.appendChild(button);

delete link
delete button
delete span

var div
var ul
var li
var a
var textnode

div = document.createElement("div");
div.className = "collapse navbar-collapse";
div.id = "navbarSupportedContent";

ul = document.createElement("ul");
ul.className = "navbar-nav mr-auto";

for (mainitem in sitemap) {
	li = document.createElement("li");
	li.className = "nav-item";
	a = document.createElement("a");
	a.className = "nav-link";
	a.href = "#"; //domain +  sitemap[mainitem].path;
	textnode = document.createTextNode(mainitem);
	a.appendChild(textnode);
	var dropdown = false;
	var subdiv = document.createElement("div");
	for (subitem in sitemap[mainitem]) {
		subdiv.className = "dropdown-menu dropdown-primary";
		subdiv.setAttribute("aria-labelledby","navbarDropdownMenuLink");
		if (typeof sitemap[mainitem][subitem].path === 'string'){
			dropdown = true;
			var suba = document.createElement("a");
			suba.className = "dropdown-item";
			if (experiences[company].path.charAt(0) == '/') {
				suba.href = domain +  sitemap[mainitem][subitem].path;
			}
			else {
				suba.href = sitemap[mainitem][subitem].path;
			}
			// suba.href = domain +  sitemap[mainitem][subitem].path;
			textnode = document.createTextNode(sitemap[mainitem][subitem].company);
			suba.appendChild(textnode);
			subdiv.appendChild(suba);
		}
	}

	if (dropdown == true){
		li.className = li.className + " dropdown";
		a.className = a.className + " dropdown-toggle";
		a.id="navbarDropdown" 
		a.setAttribute("role","button");
		a.setAttribute("data-toggle","dropdown");
		a.setAttribute("aria-haspopup","true");
		a.setAttribute("aria-expanded","false");
	}


	
	li.appendChild(a);


	if (dropdown == true){
		li.appendChild(subdiv);
	}


	ul.appendChild(li);
}

div.appendChild(ul);
nav.appendChild(div);

document.body.prepend(nav, document.body.firstChild);

}



/*  OLD
function addMenubar_ignore() {
	var references = {
		'Home' : '',
		'Interests' : {
			'path' 				: '/#Interest',
			'Origami' 			: '/Interests/Origami/index.html',
			'Travel' 			: '/Interests/Travelling/index.html',
			'Robots' 			: '/Interests/Robots/index.html',
			'Photography' 		: '/Interests/Photography/index.html'
		},	
		'Employment' : {	
			'path' 				: '/#Work',
			'CAPREIT' 			: '/Work/CAPREIT/index.html',
			'CTW' 				: '/Work/CTWorkshop/index.html'
		},	
		'Projects' : {	
			'path' 				: '/#Project',
			'EcoCAR3' 			: '/Projects/EcoCAR/index.html',
			'Formula Hybrid'	: '/Projects/FormulaHybrid/index.html',
			'Strangers' 		: '/Projects/Strangers/index.html',
			'QuadSim' 			: '/Projects/QuadSim/index.html',
			'SumoBot' 			: '/Projects/SumoBot/index.html',
			'Class Projects' 	: '/Projects/Class/index.html',
			'FIRST Robotics' 	: '/Projects/FIRST/index.html',
			'F1 in Schools' 	: '/Projects/F1/index.html',
			'VEX Robotics' 		: '/Projects/VEX/index.html',
			'Skills Robotics' 	: '/Projects/Skills/index.html'
		},
		'Contact' : ''
	};


	addMenu(references);
}

function addMenu(references,level) {
	var domain = 'http://www.prakhargarg.me';
	if (level == null) {
		level = 1;
	}
	var ul = document.createElement("ul");
	if (level == 1) {
		ul.id = 'dropdownMain';
	} else {
		ul.id = 'dropdown-content';
		ul.className = 'dropdown-content';
	}
	for (item in references) {
		if (item != 'path') {
			if (typeof(references[item]) == 'string') {
				var li = document.createElement("li");
				li.className = 'dropdown';
				var a = document.createElement("a");
				var node = document.createTextNode(item);
				a.appendChild(node);
				a.href = domain + references[item];
				li.appendChild(a);
				ul.appendChild(li);
			}
			else {
				var li = document.createElement("li");
				li.className = 'dropdown';
				var a = document.createElement("a");
				a.className = 'subMenu';
				a.href = domain + references[item]['path'];
				var node = document.createTextNode(item);
				a.appendChild(node);
				li.appendChild(a);
				li.appendChild(addMenu(references[item],level + 1));
				ul.appendChild(li);		
			}
			
			
		}

	}
	if (level == 1) {
		var menu = document.createElement("div");
		menu.id = 'Menu';
		menu.className = 'Menu';
		//var element = document.getElementById("Menu");
		menu.appendChild(ul);
		document.body.appendChild(menu);
	}
	return ul;
	
}
*/