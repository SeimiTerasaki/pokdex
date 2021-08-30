"use strict";
exports.__esModule = true;
var react_1 = require("react");
var barGraph_1 = require("@/components/barGraph");
var BasicInfoTab = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: "text-2xl pt-2 mb-2 capitalize font-bold text-gray-700" },
                "Height: ",
                data.height),
            react_1["default"].createElement("p", { className: "text-2xl mt-2 mb-2 capitalize font-bold text-gray-700" },
                "Weight: ",
                data.weight),
            react_1["default"].createElement("p", { className: "text-2xl mt-2 mb-2 capitalize font-bold text-gray-700" },
                "Order: ",
                data.order),
            react_1["default"].createElement("p", { className: "text-2xl mt-2 mb-2 capitalize font-bold text-gray-700" }, "Abilities:"),
            react_1["default"].createElement("ol", { className: "" }, data.abilities.map(function (ability) { return (react_1["default"].createElement("li", { className: "capitalize", key: ability.ability.name }, ability.ability.name)); }))),
        react_1["default"].createElement("div", { className: "p-4 mt-4 md:mx-4 bg-white capitalize col-span-1 md:col-span-2" },
            react_1["default"].createElement("p", { className: "text-2xl mt-2 mb-2 font-bold text-black" }, "Base Stats:"),
            react_1["default"].createElement(barGraph_1["default"], { data: data.stats }))));
};
exports["default"] = BasicInfoTab;
