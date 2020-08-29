/// <reference types="react" />
import { FooterChildType, LogoConfigType } from '../../../../shared';
interface LogoType extends FooterChildType {
    logo: LogoConfigType;
}
declare const LogoContainer: (props: LogoType) => JSX.Element;
export default LogoContainer;
