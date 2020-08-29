import React, { FC } from 'react';
interface Props {
    handlerClickMenu: (defaultState?: boolean) => void;
    children: React.ReactElement;
    header: React.ReactElement;
    isMobile: boolean;
    openMenu: boolean;
}
declare const DrawerWrapper: FC<Props>;
export default DrawerWrapper;
