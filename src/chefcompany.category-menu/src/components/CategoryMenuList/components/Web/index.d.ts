import React from 'react';
import { CategoriesType } from '../../../../shared';
import { IntlShape } from 'react-intl';
interface Props {
    categories: CategoriesType[];
    handlerClickMenu: (defaultState?: boolean) => void;
    openMenu: boolean;
    setCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setShowCategoryItem: React.Dispatch<React.SetStateAction<CategoriesType>>;
    showCategoryItem: CategoriesType;
    intl: IntlShape;
    isMobile: boolean;
}
declare const Web: (props: Props) => JSX.Element;
export default Web;
