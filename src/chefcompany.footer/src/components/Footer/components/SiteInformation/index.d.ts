/// <reference types="react" />
import { FooterChildType, InformationConfigType } from '../../../../shared';
interface SiteType extends FooterChildType {
    information: InformationConfigType;
}
declare const SiteInformation: (props: SiteType) => JSX.Element;
export default SiteInformation;
