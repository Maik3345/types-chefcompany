/// <reference types="react" />
interface Props {
    handlerClickMenu: (defaultState?: boolean) => void;
    openMenu: boolean;
    showButton: boolean;
}
declare const CloseDrawer: (props: Props) => JSX.Element;
export default CloseDrawer;
