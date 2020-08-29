/// <reference types="react" />
interface SpecificationsProps {
    specifications: sProps[];
    showBrand: boolean;
    showDelivery: boolean;
}
interface sProps {
    name: string;
    highlight: boolean;
}
declare const Specifications: {
    ({ showBrand, showDelivery, specifications }: SpecificationsProps): JSX.Element;
    defaultProps: {
        specifications: {
            name: string;
            highlight: boolean;
        }[];
        showBrand: boolean;
        showDelivery: boolean;
    };
};
export default Specifications;
