import React from 'react';
import { CategoriesType, SubMenuType } from '../../../../shared';
import { IntlShape } from 'react-intl';
interface Props {
    categories: CategoriesType[];
    setCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handlerClickMenu: (defaultState?: boolean) => void;
    openMenu: boolean;
    isMobile: boolean;
    setShowCategoryItem: React.Dispatch<React.SetStateAction<CategoriesType>>;
    showCategoryItem: CategoriesType;
    handleClickMenuMobile: (item: CategoriesType) => void;
    subMenuCategories: SubMenuType[];
    removeSubMenuCategories: (index: number) => void;
    allCategoriesChild: CategoriesType[];
    intl: IntlShape;
}
declare const Mobile: (props: Props) => JSX.Element;
export default Mobile;
