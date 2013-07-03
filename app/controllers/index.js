// create menu view
var data = [];

var v1 = Ti.UI.createView({
	height : '100%',
	width : '320dp',
	left : '0%',
	backgroundColor : '#212429'
});

$.drawermenu.drawermenuview.add(v1);

var tableView = Ti.UI.createTableView({
	height : '100%',
	width : '100%',
	separatorColor : '#111214'
});
v1.add(tableView);

var sectionPost = Ti.UI.createTableViewRow({
	height : '50dp',
	touchEnabled : false,
	width : '100%',
	backgroundColor : '#212429'
});

var postLabel = Ti.UI.createLabel({
	text : 'White Screen',
	color : 'white',
	touchEnabled : false,
	font : {
		fontSize : '18dp'
	}
});

sectionPost.add(postLabel);

var sectionInformation = Ti.UI.createTableViewRow({
	height : '50dp',
	touchEnabled : false,
	width : '100%',
	backgroundColor : '#212429'
});

var informationLabel = Ti.UI.createLabel({
	text : 'Black Screen',
	color : 'white',
	touchEnabled : false,
	font : {
		fontSize : '18dp'
	}
});

sectionInformation.add(informationLabel);

var sectionGear = Ti.UI.createTableViewRow({
	height : '50dp',
	width : '100%',
	touchEnabled : false,
	backgroundColor : '#212429'
});

var gearLabel = Ti.UI.createLabel({
	text : 'Yellow Screen',
	color : 'white',
	touchEnabled : false,
	font : {
		fontSize : '18dp'
	}
});

sectionGear.add(gearLabel);

var sectionTop = Ti.UI.createTableViewRow({
	height : '50dp',
	width : '100%',
	touchEnabled : false,
	backgroundColor : '#212429'
});

var topLabel = Ti.UI.createLabel({
	text : 'Blue Screen',
	color : 'white',
	touchEnabled : false,
	font : {
		fontSize : '18dp'
	}
});

sectionTop.add(topLabel);

data.push(sectionPost);
data.push(sectionInformation);
data.push(sectionGear);
data.push(sectionTop);

tableView.setData(data);

tableView.addEventListener('click', function(e) {
	if (e.row.children[0].text == 'White Screen') {
		var postScreen = Alloy.createController('postScreen').getView();
		$.drawermenu.drawermainview.add(postScreen);
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'Black Screen') {
		var informationScreen = Alloy.createController('informationScreen').getView();
		$.drawermenu.drawermainview.add(informationScreen);
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'Nothing') {
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'Yellow Screen') {
		var gearScreen = Alloy.createController('gearScreen').getView();
		$.drawermenu.drawermainview.add(gearScreen);
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'Blue Screen') {
		var top10Screen = Alloy.createController('top10Screen').getView();
		$.drawermenu.drawermainview.add(top10Screen);
		$.drawermenu.showhidemenu();
	} else {
		$.drawermenu.showhidemenu();
	}
});

var top10Screen = Alloy.createController('top10Screen').getView();
$.drawermenu.drawermainview.add(top10Screen);

Ti.App.addEventListener('settingImg', function(data) {
	$.drawermenu.showhidemenu();
});

$.index.open();
