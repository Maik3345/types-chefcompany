/// <reference types="react" />
import { childrenItemType, CategoriesType } from '../../../../shared';
interface CategoryProps {
    department: CategoriesType;
    categories: childrenItemType[];
}
declare const Category: (props: CategoryProps) => JSX.Element;
export default Category;
