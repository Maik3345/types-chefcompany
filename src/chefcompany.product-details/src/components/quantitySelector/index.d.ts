/// <reference types="react" />
interface QuantitySelectorProps {
    minusIconId: string;
    plusIconId: string;
    deleteIConId: string;
    quantityLabel: string;
    quantity: number;
    downQuantity: (e: any) => void;
    upQuantity: (e: any) => void;
    onRemoveItem: (e: any) => void;
}
declare const QuantitySelector: {
    ({ deleteIConId, downQuantity, minusIconId, onRemoveItem, plusIconId, quantity, quantityLabel, upQuantity }: QuantitySelectorProps): JSX.Element;
    defaultProps: {
        minusIconId: string;
        plusIconId: string;
        deleteIConId: string;
        quantityLabel: string;
    };
    schema: {
        title: string;
        type: string;
        properties: {
            quantityLabel: {
                title: string;
                type: string;
                description: string;
                default: string;
            };
        };
    };
};
export default QuantitySelector;
