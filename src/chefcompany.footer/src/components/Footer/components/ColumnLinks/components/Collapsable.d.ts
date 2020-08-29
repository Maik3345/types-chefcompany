/// <reference types="react" />
import { LinksType } from '../../../../../shared';
interface CollapseType {
    isOpen: boolean;
    isMobile: boolean;
    item: LinksType;
    alignCollapse: string;
    collapseOnWeb: boolean;
}
declare const Collapse: (props: CollapseType) => JSX.Element;
export default Collapse;
