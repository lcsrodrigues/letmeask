import * as React from 'react';
import styles from './style.module.scss';
import { ActionPlanTable } from '../../components/tables';
import { Card } from './../cards';
import { CardsENUM } from '../../components/Enum/enum';
export var Body = function (_a) {
    var currentUrl = _a.currentUrl, ctxtData = _a.ctxtData, userEmail = _a.userEmail, actionEnding = _a.actionEnding, actionOpen = _a.actionOpen, actionInProgress = _a.actionInProgress, actionCompleted = _a.actionCompleted, actionClosed = _a.actionClosed, actionTotal = _a.actionTotal;
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.sideRight },
            React.createElement("div", { className: styles.actionPlan },
                React.createElement("div", { className: styles.apTitle },
                    React.createElement("span", { className: styles.title }, "Action Plan"),
                    React.createElement("br", null),
                    React.createElement("span", { className: styles.subtitle }, "Acompanhe abaixo o andamento das a\u00E7\u00F5es.")),
                React.createElement("div", { className: styles.dashboard },
                    React.createElement(Card, { data: actionEnding, title: CardsENUM.EXPIRED }),
                    React.createElement(Card, { data: actionOpen, title: CardsENUM.OPEN }),
                    React.createElement(Card, { data: actionInProgress, title: CardsENUM.INPROGRESS }),
                    React.createElement(Card, { data: actionCompleted, title: CardsENUM.COMPLETED }),
                    React.createElement(Card, { data: actionClosed, title: CardsENUM.FINISHED }),
                    React.createElement(Card, { data: actionTotal, title: CardsENUM.TOTAL })),
                React.createElement("div", { className: styles.apATable },
                    React.createElement(ActionPlanTable, { cURL: currentUrl, ctxtData: ctxtData, userEmail: userEmail }))))));
};
//# sourceMappingURL=index.js.map