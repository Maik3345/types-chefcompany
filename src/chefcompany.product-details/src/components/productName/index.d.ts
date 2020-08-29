/// <reference types="react" />
interface ProductNameProps {
    childrenPosition: string;
    children: any;
}
declare const ProductName: {
    ({ children, childrenPosition }: ProductNameProps): JSX.Element;
    defaultProps: {
        childrenPosition: string;
    };
};
export default ProductName;
