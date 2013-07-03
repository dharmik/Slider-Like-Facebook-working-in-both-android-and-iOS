function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "red",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.drawermenu = Alloy.createWidget("com.drawermenu.widget", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.index
    });
    $.__views.drawermenu.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var v1 = Ti.UI.createView({
        height: "100%",
        width: "320dp",
        left: "0%",
        backgroundColor: "#212429"
    });
    $.drawermenu.drawermenuview.add(v1);
    var tableView = Ti.UI.createTableView({
        height: "100%",
        width: "100%",
        separatorColor: "#111214"
    });
    v1.add(tableView);
    var sectionPost = Ti.UI.createTableViewRow({
        height: "50dp",
        touchEnabled: false,
        width: "100%",
        backgroundColor: "#212429"
    });
    var postLabel = Ti.UI.createLabel({
        text: "White Screen",
        color: "white",
        touchEnabled: false,
        font: {
            fontSize: "18dp"
        }
    });
    sectionPost.add(postLabel);
    var sectionInformation = Ti.UI.createTableViewRow({
        height: "50dp",
        touchEnabled: false,
        width: "100%",
        backgroundColor: "#212429"
    });
    var informationLabel = Ti.UI.createLabel({
        text: "Black Screen",
        color: "white",
        touchEnabled: false,
        font: {
            fontSize: "18dp"
        }
    });
    sectionInformation.add(informationLabel);
    var sectionGear = Ti.UI.createTableViewRow({
        height: "50dp",
        width: "100%",
        touchEnabled: false,
        backgroundColor: "#212429"
    });
    var gearLabel = Ti.UI.createLabel({
        text: "Yellow Screen",
        color: "white",
        touchEnabled: false,
        font: {
            fontSize: "18dp"
        }
    });
    sectionGear.add(gearLabel);
    var sectionTop = Ti.UI.createTableViewRow({
        height: "50dp",
        width: "100%",
        touchEnabled: false,
        backgroundColor: "#212429"
    });
    var topLabel = Ti.UI.createLabel({
        text: "Blue Screen",
        color: "white",
        touchEnabled: false,
        font: {
            fontSize: "18dp"
        }
    });
    sectionTop.add(topLabel);
    data.push(sectionPost);
    data.push(sectionInformation);
    data.push(sectionGear);
    data.push(sectionTop);
    tableView.setData(data);
    tableView.addEventListener("click", function(e) {
        if ("White Screen" == e.row.children[0].text) {
            var postScreen = Alloy.createController("postScreen").getView();
            $.drawermenu.drawermainview.add(postScreen);
            $.drawermenu.showhidemenu();
        } else if ("Black Screen" == e.row.children[0].text) {
            var informationScreen = Alloy.createController("informationScreen").getView();
            $.drawermenu.drawermainview.add(informationScreen);
            $.drawermenu.showhidemenu();
        } else if ("Nothing" == e.row.children[0].text) $.drawermenu.showhidemenu(); else if ("Yellow Screen" == e.row.children[0].text) {
            var gearScreen = Alloy.createController("gearScreen").getView();
            $.drawermenu.drawermainview.add(gearScreen);
            $.drawermenu.showhidemenu();
        } else if ("Blue Screen" == e.row.children[0].text) {
            var top10Screen = Alloy.createController("top10Screen").getView();
            $.drawermenu.drawermainview.add(top10Screen);
            $.drawermenu.showhidemenu();
        } else $.drawermenu.showhidemenu();
    });
    var top10Screen = Alloy.createController("top10Screen").getView();
    $.drawermenu.drawermainview.add(top10Screen);
    Ti.App.addEventListener("settingImg", function() {
        $.drawermenu.showhidemenu();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;