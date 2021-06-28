interface IButton {
    title: string;
    bkColor?: string;
    cURL?: string;
}
export declare function ButtonNewAction({ title, bkColor, cURL, ...props }: IButton): JSX.Element;
interface IFilter {
    title: string;
    iconPath?: string;
}
export declare function Filters({ title, iconPath, ...props }: IFilter): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map