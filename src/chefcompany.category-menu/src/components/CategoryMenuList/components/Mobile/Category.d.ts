/// <reference types="react" />
import { SubMenuType, CategoriesType } from '../../../../shared';
interface Props {
    list: SubMenuType[];
    removeSubMenuCategories: (index: number) => void;
    handleClickMenuMobile: (item: CategoriesType) => void;
    allCategoriesChild: CategoriesType[];
}
declare const Category: (props: Props) => JSX.Element;
export default Category;
