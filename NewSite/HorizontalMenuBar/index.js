function addMenubar() {
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

/*	var menu = document.getElementById('MenuBar1');
	var ul = document.createElement("p");
	ul.id = 'MenuBar1';
	ul.className = 'MenuBarHorizontal';
	ul.inner = 'Home';
	document.body.innerHTML = ul;
	*/	

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