/// <reference types="react" />
interface Props {
    handlerClickMenu?: (defaultState?: boolean) => void;
    isMobile: boolean;
    openMenu: boolean;
}
declare const CategoryButton: ({ handlerClickMenu, isMobile, openMenu }: Props) => JSX.Element;
export default CategoryButton;
