var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import style from './style.module.scss';
;
export function ButtonNewAction(_a) {
    var title = _a.title, bkColor = _a.bkColor, cURL = _a.cURL, props = __rest(_a, ["title", "bkColor", "cURL"]);
    var eventClick = function () {
        window.open(cURL + "/Lists/Action%20Plans/NewForm.aspx?env=Embedded&Source=" + cURL + "/SitePages/Action-Plan.aspx", "_self");
    };
    return React.createElement("div", { className: style.btn, style: { backgroundColor: bkColor }, onClick: eventClick }, title);
}
;
;
export function Filters(_a) {
    var title = _a.title, iconPath = _a.iconPath, props = __rest(_a, ["title", "iconPath"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: style.filter },
            React.createElement("div", { className: style.icon },
                React.createElement("img", { src: iconPath })),
            React.createElement("div", { className: style.title },
                React.createElement("span", null, title)))));
}
;
//# sourceMappingURL=index.js.map