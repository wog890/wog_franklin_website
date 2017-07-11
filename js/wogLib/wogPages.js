Wog.Pages = function() {
	
	// PRIVATE -------------------------------------------------------------------------------------

	var _public = {};

	var tabs = [
		{id: 'home', txt: 'Home', type: 'tab', active: true},
		{id: 'dpdDepartments', txt: 'Departments', type: 'dropdown', children: [
			{id: 'depArcher', txt: 'Archery'},
			{id: 'depClothing', txt: 'Clothing'},
			{id: 'depFirearms', txt: 'Firearms'},
			{id: 'depFishing', txt: 'Fishing'},
			{id: 'depOnline', txt: 'Online Sales'},
			{id: 'depRepair', txt: 'Repair'}
		]},
		{id: 'newProducts', txt: 'New Products', type: 'tab'},
		{id: 'currentSalesAds', txt: 'Current Sales Ads', type: 'tab'},
		{id: 'about', txt: 'About', type: 'tab'},
		{id: 'contact', txt: 'Contact', type: 'tab'},
		{id: 'admin', txt: 'Admin', type: 'tab'}
	];

	function createTabPanels() {
		var tabContainer = $('#tabNavContent');
		var dropdowns;
		for (var i=0,j=tabs.length; i<j; i++) {
			switch(tabs[i].type) {
				case 'tab':
					tabContainer.append('<div id="'+tabs[i].id+'">');
				break;
				case 'dropdown':
					dropdowns = tabs[i].children;
					for (var k=0,l=dropdowns.length; k<l; k++) {
						tabContainer.append('<div id="'+dropdowns[i].id+'">');
					}
				break;
			}
		}
	}

	function createTabs() {
		var tabNav = $('#tabNavigation');
		var append, dropdowns;
		for (var i=0, j=tabs.length; i<j; i++) {
			append = '';
			switch(tabs[i].type) {
				case 'tab':
					switch(tabs[i].active) {
						case true:
							tabNav.append('<li class="active" role="presentation"><a class="tab-bold" href="#'+tabs[i].id+'">'+tabs[i].txt+'</a></li>');
						break;
						default:
							tabNav.append('<li role="presentation"><a class="tab-bold" href="#'+tabs[i].id+'">'+tabs[i].txt+'</a></li>');
						break;
					}
				break;
				case 'dropdown':
					dropdowns = tabs[i].children;
					for (var k=0,l=dropdowns.length; k<l; k++) {
						append += '<li><a href="#'+dropdowns[k].id+'" data-toggle="tab">'+dropdowns[k].txt+'</a></li>'
					}
					tabNav.append('<li class="dropdown" role="presentation"><a class="dropdown-toggle tab-bold" data-toggle="dropdown">'+
						tabs[i].txt+'<span class="caret"></span><ul class="dropdown-menu">'+append+'</ul></a></li>');
				break;
			}
		}
	}

	function loadTabPanels() {
		var dropdowns;
		for (var i=0,j=tabs.length; i<j; i++) {
			switch(tabs[i].type) {
				case 'tab':
				break;
				case 'dropdown':
					dropdowns = tabs[i].children;
					for (var k=0,l=dropdowns.length; k<l; k++) {
					}
				break;
			}
		}
	}

	// PUBLIC --------------------------------------------------------------------------------------

	_public._init = function() {
		createTabs();
		createTabPanels();
		loadTabPanels();
	};

	return _public;

}();
