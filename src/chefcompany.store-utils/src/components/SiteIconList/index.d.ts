/// <reference types="react" />
import { IconType } from '../VtexIcon';
interface SiteIconProps {
    icons: IconType[];
}
declare const SiteIconList: {
    (props: SiteIconProps): JSX.Element;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            icon: {
                title: string;
                type: string;
            };
        };
    };
    defaultProps: SiteIconProps;
};
export default SiteIconList;
