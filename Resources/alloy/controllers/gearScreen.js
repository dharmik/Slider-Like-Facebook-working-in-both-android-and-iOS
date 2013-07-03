function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.gearScreen = Ti.UI.createView({
        backgroundColor: "yellow",
        height: "100%",
        width: "100%",
        id: "gearScreen"
    });
    $.__views.gearScreen && $.addTopLevelView($.__views.gearScreen);
    $.__views.topBarView = Ti.UI.createView({
        top: "0%",
        width: "100%",
        backgroundColor: "#b5b5b5",
        height: "9%",
        id: "topBarView"
    });
    $.__views.gearScreen.add($.__views.topBarView);
    $.__views.settingImg = Ti.UI.createImageView({
        left: "2%",
        width: "13%",
        height: "70%",
        image: "/menuSetting.png",
        id: "settingImg"
    });
    $.__views.topBarView.add($.__views.settingImg);
    $.__views.gearLabel = Ti.UI.createLabel({
        color: "black",
        text: "Yellow Screen",
        font: {
            fontWeight: "bold",
            fontSize: "18dp"
        },
        id: "gearLabel"
    });
    $.__views.topBarView.add($.__views.gearLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.settingImg.addEventListener("click", function() {
        Ti.App.fireEvent("settingImg");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;