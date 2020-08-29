export interface childrenItemType {
    id: number;
    name: string;
    href: string;
    hasChildren: boolean;
    children: childrenItemType[];
}
export interface CategoriesType {
    id: number;
    name: string;
    slug: string;
    href: string;
    hasChildren: boolean;
    children: childrenItemType[];
}
export interface SubMenuType {
    parent: CategoriesType;
    children: CategoriesType[];
}
