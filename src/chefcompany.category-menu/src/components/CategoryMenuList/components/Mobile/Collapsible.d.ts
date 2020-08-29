/// <reference types="react" />
import { CategoriesType, childrenItemType } from '../../../../shared';
interface Props {
    item: CategoriesType | childrenItemType;
    haveChildren: childrenItemType[];
    isChildren?: boolean;
}
declare const CollapsibleWrapper: (props: Props) => JSX.Element;
export default CollapsibleWrapper;
