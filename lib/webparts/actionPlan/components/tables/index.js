import * as React from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Inject, Page, Sort, PdfExport, ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
// import { ExcelExport } from '@progress/kendo-react-excel-export';
// import { data } from './dataSource';
import './style.module.scss';
import styles from './customStyle.module.scss';
import { ButtonNewAction, Filters } from '../buttons/index';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { convertISOToDate, removeHTMLTag } from '../Helpers';
import { Ctxt } from '../Context';
import { CardsENUM } from '../Enum/enum';
export function ActionPlanTable(_a) {
    var cURL = _a.cURL, ctxtData = _a.ctxtData, userEmail = _a.userEmail;
    var _b = useState([]), data = _b[0], setData = _b[1];
    var _c = useState(0), keyRefresh = _c[0], setKeyRefresh = _c[1];
    var _d = useContext(Ctxt), switchClick = _d.switchClick, setSwitchClick = _d.setSwitchClick;
    useEffect(function () {
        createData(ctxtData);
    }, [ctxtData]);
    useEffect(function () {
        setKeyRefresh(keyRefresh + 1);
    }, [data]);
    useEffect(function () {
        if (switchClick) {
            getAllActionPlanByUser();
        }
        else {
            getAllActionPlan();
        }
    }, [switchClick]);
    var getAllActionPlan = function () {
        axios.get(cURL + "/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/Title,*&$expand=Responsable")
            .then(function (result) {
            createData(result.data.value);
        })
            .catch(function (error) { console.log(error); });
    };
    var getAllActionPlanByUser = function () {
        axios.get(cURL + ("/_api/web/lists/getbytitle('Action Plans')/items?$select=Responsable/EMail,Responsable/Title,*&$expand=Responsable&$filter=Responsable/EMail eq '" + userEmail + "'"))
            .then(function (result) {
            createData(result.data.value);
        })
            .catch(function (error) { console.log(error); });
    };
    var createData = function (result) {
        if (result.length > 0) {
            var array = [];
            var obj = {
                ID: 0,
                Description: "",
                Status: "",
                Priority: "",
                Responsible: "",
                Platform: "",
                Authority: "",
                Deadline: "",
                Details: ""
            };
            result.map(function (d) {
                obj.ID = isNullOrEmpty(d.Id);
                obj.Description = isNullOrEmpty(d.Title);
                obj.Status = isNullOrEmpty(d.Status);
                obj.Priority = isNullOrEmpty(d.Priority);
                obj.Responsible = isNullOrEmpty(d.Responsable.Title);
                obj.Platform = isNullOrEmpty(d.Platform);
                obj.Authority = isNullOrEmpty(d.Authority);
                obj.Deadline = isNullOrEmpty(convertISOToDate(d.Deadline));
                obj.Details = isNullOrEmpty(removeHTMLTag(d.Detailed_x0020_actions));
                array.push(obj);
                obj = {
                    ID: 0,
                    Description: "",
                    Status: "",
                    Priority: "",
                    Responsible: "",
                    Platform: "",
                    Authority: "",
                    Deadline: "",
                    Details: ""
                };
            });
            setData(array);
        }
        else {
            setData([]);
        }
    };
    var isNullOrEmpty = function (value) {
        if (value == "" || typeof (value) == "undefined" || value == null) {
            return "--";
        }
        return value;
    };
    var switchClickEvent = function (event) {
        var checked = event.target.checked;
        if (checked) { //user
            setSwitchClick(true);
        }
        else { //all
            setSwitchClick(false);
        }
    };
    var doubleClickRow = function (e) {
        console.log(e);
        window.open(cURL + "/Lists/Action%20Plans/EditForm.aspx?ID=" + e.rowData.ID + "&env=Embedded&Source=" + cURL + "/SitePages/Action-Plan.aspx", "_self");
    };
    var statusTemplate = function (e) {
        var value = e.Status;
        var color = '';
        switch (value) {
            case CardsENUM.EXPIRED:
                color = "rgb(255,0,0,0.5)"; //vermelho
                break;
            case CardsENUM.OPEN:
                color = "rgb(0,128,0,0.5)"; //verde
                break;
            case CardsENUM.INPROGRESS:
                color = "rgb(255,215,0,0.5)"; //amarelo
                break;
            case CardsENUM.COMPLETED:
                color = "rgb(255,0,0,0.5)"; //vermelho
                break;
            default:
                color = "rgb(0,0,0,0)";
                break;
        }
        return (React.createElement("div", { className: styles.statusTemplate, style: { backgroundColor: color } },
            React.createElement("span", null, value)));
    };
    var priorityTemplate = function (e) {
        var value = e.Priority;
        var color = '';
        switch (value) {
            case 'H1':
                color = "rgb(255,0,0)"; //vermelho
                break;
            case 'H2':
                color = "rgb(255,0,0,0.5)"; //vermelho
                break;
            case 'M':
                color = "rgb(255,215,0,0.5)"; //amarelo
                break;
            case 'L':
                color = "rgb(0,128,0,0.5)"; //verde
                break;
            default:
                color = "rgb(0,0,0,0)";
                break;
        }
        return (React.createElement("div", { className: styles.priorityTemplate, style: { backgroundColor: color } },
            React.createElement("span", null, value)));
    };
    var _export;
    var excelExport = function () {
        if (_export) {
            _export.excelExport();
        }
        ;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.apActions },
            React.createElement("div", { className: styles.apActionsLeft },
                React.createElement(ButtonNewAction, { title: "+ New", bkColor: '#26AA51', cURL: cURL })),
            React.createElement("div", { className: styles.apActionsRight },
                React.createElement(Filters, { title: "Alertas", iconPath: require('../../../../images/Ico_Alerta.svg') }),
                React.createElement("div", { className: styles.filter, onClick: excelExport },
                    React.createElement("div", { className: styles.icon },
                        React.createElement("img", { src: require('../../../../images/Ico_Exportar.svg') })),
                    React.createElement("div", { className: styles.title },
                        React.createElement("span", null, "Exportar CSV"))),
                React.createElement("div", { className: styles.filterText },
                    React.createElement("div", { className: styles.filterSwitch },
                        React.createElement("div", { className: styles.All },
                            React.createElement("span", null, "All")),
                        React.createElement("div", { className: styles.Switch },
                            React.createElement(SwitchComponent, { offLabel: 'All', checked: true, onLabel: 'User', onChange: function (e) { return switchClickEvent(e); } })),
                        React.createElement("div", { className: styles.User },
                            React.createElement("span", null, "Your Action Plans")))))),
        React.createElement(GridComponent, { className: styles.striped, dataSource: data, allowPaging: true, allowSorting: true, pageSettings: { pageSize: 30 }, allowFiltering: true, filterSettings: { type: 'Menu' }, recordDoubleClick: function (e) { return doubleClickRow(e); }, allowExcelExport: true, ref: function (exporter) { return (_export = exporter); }, key: keyRefresh },
            React.createElement(ColumnsDirective, null,
                React.createElement(ColumnDirective, { field: 'ID', width: 95 }),
                React.createElement(ColumnDirective, { field: 'Description' }),
                React.createElement(ColumnDirective, { field: 'Status', filter: { type: 'CheckBox' }, template: function (e) { return statusTemplate(e); } }),
                React.createElement(ColumnDirective, { field: 'Priority', filter: { type: 'CheckBox' }, template: function (e) { return priorityTemplate(e); } }),
                React.createElement(ColumnDirective, { field: 'Responsible' }),
                React.createElement(ColumnDirective, { field: 'Platform', filter: { type: 'CheckBox' } }),
                React.createElement(ColumnDirective, { field: 'Authority', filter: { type: 'CheckBox' } }),
                React.createElement(ColumnDirective, { field: 'Deadline', filter: { type: 'CheckBox' } }),
                React.createElement(ColumnDirective, { field: 'Details' })),
            React.createElement(Inject, { services: [Page, Sort, Filter, PdfExport, ExcelExport, Toolbar] }))));
}
//# sourceMappingURL=index.js.map