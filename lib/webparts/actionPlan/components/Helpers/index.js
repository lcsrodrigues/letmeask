export var convertISOToDate = function (dateISO) {
    dateISO = dateISO.split("T")[0];
    var data = new Date(dateISO);
    var dia = data.getDate() + 1;
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
};
export var removeHTMLTag = function (textWithHTML) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = textWithHTML;
    return tmp.textContent || tmp.innerText || "";
};
//# sourceMappingURL=index.js.map