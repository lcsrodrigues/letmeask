import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Ctxt } from '../components/Context';
import { Body } from './Body';
export default function ActionPlan(_a) {
    var currentUrl = _a.currentUrl, userEmail = _a.userEmail;
    var _b = useState([]), actionEnding = _b[0], setActionEnding = _b[1];
    var _c = useState([]), actionOpen = _c[0], setActionOpen = _c[1];
    var _d = useState([]), actionInProgress = _d[0], setActionInProgress = _d[1];
    var _e = useState([]), actionCompleted = _e[0], setActionCompleted = _e[1];
    var _f = useState([]), actionClosed = _f[0], setActionClosed = _f[1];
    var _g = useState([]), actionTotal = _g[0], setActionTotal = _g[1];
    var _h = useState([]), ctxtData = _h[0], setCtxtData = _h[1];
    var _j = useState(true), switchClick = _j[0], setSwitchClick = _j[1];
    // useEffect(() => {
    //   chargeCountByUser();
    // }, []);
    useEffect(function () {
        if (switchClick) { //user
            chargeCountByUser();
        }
        else { //all
            chargeCount();
        }
    }, [switchClick]);
    function chargeCount() {
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=(Deadline lt datetime'" + new Date().toISOString() + "')"))
            .then(function (result) {
            var totalEnding = [];
            result.data.value.map(function (action) {
                if (action.Status == 'Open' || action.Status == 'In progress') {
                    totalEnding.push(action);
                }
            });
            setActionEnding(totalEnding);
        });
        axios.get(currentUrl + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Status eq 'Open'").then(function (result) { setActionOpen(result.data.value); });
        axios.get(currentUrl + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Status eq 'In progress'").then(function (result) { setActionInProgress(result.data.value); });
        axios.get(currentUrl + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Status eq 'Completed'").then(function (result) { setActionCompleted(result.data.value); });
        axios.get(currentUrl + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Status eq 'Closed'").then(function (result) { setActionClosed(result.data.value); });
        axios.get(currentUrl + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable").then(function (result) { setActionTotal(result.data.value); });
    }
    function chargeCountByUser() {
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "' and (Deadline lt datetime'" + new Date().toISOString() + "')"))
            .then(function (result) {
            var totalEnding = [];
            result.data.value.map(function (action) {
                if (action.Status == 'Open' || action.Status == 'In progress') {
                    totalEnding.push(action);
                }
            });
            setActionEnding(totalEnding);
        })
            .catch(function (err) {
            console.log(err);
        });
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "' and Status eq 'Open'")).then(function (result) { setActionOpen(result.data.value); });
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "' and Status eq 'In progress'")).then(function (result) { setActionInProgress(result.data.value); });
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "' and Status eq 'Completed'")).then(function (result) { setActionCompleted(result.data.value); });
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "' and Status eq 'Closed'")).then(function (result) { setActionClosed(result.data.value); });
        axios.get(currentUrl + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "'")).then(function (result) { setActionTotal(result.data.value); });
    }
    return (React.createElement(Ctxt.Provider, { value: { ctxtData: ctxtData, setCtxtData: setCtxtData, switchClick: switchClick, setSwitchClick: setSwitchClick } },
        React.createElement(Body, { actionEnding: actionEnding, actionOpen: actionOpen, actionInProgress: actionInProgress, actionCompleted: actionCompleted, actionClosed: actionClosed, actionTotal: actionTotal, ctxtData: ctxtData, currentUrl: currentUrl, userEmail: userEmail })));
}
//# sourceMappingURL=ActionPlan.js.map