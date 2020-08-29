export interface IBaseDomain {
    title: string;
    url: string;
    ico: string;
    color: string;
}
export interface ICategories extends IBaseDomain {
    subcategories: IBaseDomain[];
}
export interface IDepartment extends IBaseDomain {
    categories?: ICategories[];
    blod: boolean;
}
export interface IAditionalInfo {
    '__editorItemTitle': string;
    url: string;
}
export interface ICategoryMenu {
    sticky: boolean;
    fullWidth: boolean;
    departments: IDepartment[];
    onSelectDeparment?: (data: ICategories) => void;
    itemSelected?: IDepartment;
    additionalInfo: IAditionalInfo[];
}
export interface ICategoryMenuItem {
    department: IDepartment;
}
