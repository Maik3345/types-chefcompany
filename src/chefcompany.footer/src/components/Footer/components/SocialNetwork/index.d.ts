/// <reference types="react" />
import { FooterChildType, SocialConfigType } from '../../../../shared';
interface SocialType extends FooterChildType {
    social: SocialConfigType;
}
declare const SocialNetwork: (props: SocialType) => JSX.Element;
export default SocialNetwork;
