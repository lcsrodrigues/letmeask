import * as React from 'react';
import styles from './style.module.scss';
export var Navbar = function () {
    return (React.createElement("div", { className: styles.sideLeft },
        React.createElement("div", { className: styles.navbar },
            React.createElement("div", { className: styles.navTitle },
                React.createElement("div", { className: styles.logo },
                    React.createElement("img", { src: require('../../../images/Logo_TE_branco_Abr.svg'), alt: "Logo da Trident Energy" })),
                React.createElement("div", { className: styles.title },
                    React.createElement("span", null, "HSE Trident Energy Brazil"))),
            React.createElement("div", { className: styles.navMenu },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("span", null, "Action Plans")),
                    React.createElement("li", null,
                        React.createElement("span", null, "Dashboard")),
                    React.createElement("li", null,
                        React.createElement("span", null, "COVID-19 Waiver")),
                    React.createElement("li", null,
                        React.createElement("span", null, "Incident Management")),
                    React.createElement("li", null,
                        React.createElement("span", null, "Risk Management")),
                    React.createElement("li", null,
                        React.createElement("span", null, "Emergency Management")),
                    React.createElement("li", null,
                        React.createElement("span", null, "HSE Inspection List")),
                    React.createElement("li", null,
                        React.createElement("span", null, "N\u00E3o conformidades")),
                    React.createElement("li", null,
                        React.createElement("span", null, "Audit Documents"))))),
        React.createElement("div", { className: styles.navFooter },
            React.createElement("img", { src: require('../../../images/Logo_TE_small.svg'), alt: "Logo da Trident Energy" }))));
};
//# sourceMappingURL=index.js.map