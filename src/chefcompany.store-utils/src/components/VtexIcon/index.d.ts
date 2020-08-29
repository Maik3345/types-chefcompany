/// <reference types="react" />
export interface IconType {
    id: string;
    size?: number;
    isActive?: boolean;
    activeClassName?: string;
    mutedClassName?: string;
    color?: string;
    blockClass?: string;
    classesContainer?: string;
}
declare const VtexIcon: {
    (props: IconType): JSX.Element;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            id: {
                title: string;
                type: string;
                enum: string[];
            };
            size: {
                title: string;
                type: string;
            };
            color: {
                title: string;
                type: string;
            };
        };
    };
    defaultProps: IconType;
};
export default VtexIcon;
