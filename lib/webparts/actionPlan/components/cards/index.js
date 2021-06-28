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
import { CardsENUM } from '../Enum/enum';
import { useContext } from 'react';
import { Ctxt } from '../Context';
export function Card(_a) {
    var title = _a.title, data = _a.data, props = __rest(_a, ["title", "data"]);
    var _b = React.useState(""), icon = _b[0], setIcon = _b[1];
    var _c = React.useState(""), color = _c[0], setColor = _c[1];
    var setCtxtData = useContext(Ctxt).setCtxtData;
    React.useEffect(function () {
        switch (title) {
            case CardsENUM.EXPIRED:
                setIcon(require('../../../../images/Ico_Vencendo.svg'));
                setColor("#FF0000");
                break;
            case CardsENUM.OPEN:
                setIcon(require('../../../../images/Ico_Aberto.svg'));
                setColor("#008000");
                break;
            case CardsENUM.INPROGRESS:
                setIcon(require('../../../../images/Ico_Andamento.svg'));
                setColor("#FFD700");
                break;
            case CardsENUM.COMPLETED:
                setIcon(require('../../../../images/Ico_Completo.svg'));
                setColor("#FF0000");
                break;
            case CardsENUM.FINISHED:
                setIcon(require('../../../../images/Ico_Finalizada.svg'));
                setColor("#000");
                break;
            case CardsENUM.TOTAL:
                setIcon(require('../../../../images/Ico_Total.svg'));
                setColor("#000");
                break;
        }
    }, []);
    var filterByCard = function () {
        setCtxtData(data);
    };
    return (React.createElement("div", { className: style.card, onClick: filterByCard },
        React.createElement("div", { className: style.header },
            React.createElement("div", { className: style.icon },
                React.createElement("img", { src: icon })),
            React.createElement("div", { className: style.title },
                React.createElement("span", null, title))),
        React.createElement("div", { className: style.value },
            React.createElement("span", { style: { color: color } }, data.length))));
}
//# sourceMappingURL=index.js.map