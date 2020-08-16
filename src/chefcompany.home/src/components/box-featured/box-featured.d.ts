/// <reference types="react" />
import { BoxType } from '.';
interface BoxFeatureType extends BoxType {
    goToLink: (link: string) => void;
}
declare const BoxFeatured: (props: BoxFeatureType) => JSX.Element;
export default BoxFeatured;
