/// <reference types="react" />
interface BuyButtonProps {
    buttonText: string;
    addToCart: (e: any) => void;
    iconId: string;
    size: number;
}
declare const BuyButton: {
    ({ buttonText, addToCart, iconId, size }: BuyButtonProps): JSX.Element;
    defaultProps: {
        buttonText: string;
        iconId: string;
        size: number;
    };
    schema: {
        title: string;
        type: string;
        properties: {
            buttonText: {
                title: string;
                type: string;
                default: string;
            };
        };
    };
};
export default BuyButton;
