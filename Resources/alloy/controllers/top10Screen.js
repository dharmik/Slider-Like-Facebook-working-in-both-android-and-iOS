function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.top10Screen = Ti.UI.createView({
        backgroundColor: "blue",
        height: "100%",
        width: "100%",
        id: "top10Screen"
    });
    $.__views.top10Screen && $.addTopLevelView($.__views.top10Screen);
    $.__views.topBarView = Ti.UI.createView({
        top: "0%",
        width: "100%",
        backgroundColor: "#b5b5b5",
        height: "9%",
        id: "topBarView"
    });
    $.__views.top10Screen.add($.__views.topBarView);
    $.__views.settingImg = Ti.UI.createImageView({
        left: "2%",
        width: "13%",
        height: "70%",
        image: "/menuSetting.png",
        id: "settingImg"
    });
    $.__views.topBarView.add($.__views.settingImg);
    $.__views.top10Label = Ti.UI.createLabel({
        color: "black",
        text: "blue Screen",
        font: {
            fontWeight: "bold",
            fontSize: "18dp"
        },
        id: "top10Label"
    });
    $.__views.topBarView.add($.__views.top10Label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.settingImg.addEventListener("click", function() {
        Ti.App.fireEvent("settingImg");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;