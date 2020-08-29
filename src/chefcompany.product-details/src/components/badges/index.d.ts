/// <reference types="react" />
interface badgesConfig {
    efficiency: string;
    label: string;
    background: string;
    color: string;
    tag: string;
}
interface badgesProps {
    badgesData: badgesConfig[];
    key: string;
}
declare const Badges: {
    ({ badgesData, key }: badgesProps): JSX.Element;
    defaultProps: {
        badgesData: {
            efficiency: string;
            label: string;
            background: string;
            color: string;
            tag: string;
        }[];
        key: string;
    };
};
export default Badges;
