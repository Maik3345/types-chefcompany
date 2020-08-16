/// <reference types="react" />
interface BoxListType {
    __editorItemTitle: string;
    image: string;
    link: string;
    fullImage: boolean;
}
export interface BoxType {
    schemaName?: string;
    maxWidth: string;
    type: string;
    title: string;
    withImage: string;
    gridConfig: {
        lg: any;
        md: any;
        sm: any;
        xl: any;
        xs: any;
        spacing: any;
    };
    boxList: BoxListType[];
}
declare const BoxFeaturedWrapper: {
    (props: BoxType): JSX.Element;
    getSchema(props: BoxType): {
        title: any;
        type: string;
        properties: {
            type: {
                title: string;
                type: string;
                enum: string[];
                default: string;
            };
            title: {
                title: string;
                type: string;
            };
            maxWidth: {
                title: string;
                type: string;
                default: string;
            };
            withImage: {
                title: string;
                description: string;
                type: string;
                default: string;
            };
            gridConfig: {
                title: string;
                type: string;
                properties: {
                    lg: {
                        title: string;
                        type: string;
                        enum: number[];
                        default: number;
                    };
                    md: {
                        title: string;
                        type: string;
                        enum: number[];
                        default: number;
                    };
                    sm: {
                        title: string;
                        type: string;
                        enum: number[];
                        default: number;
                    };
                    xl: {
                        title: string;
                        type: string;
                        enum: number[];
                        default: number;
                    };
                    xs: {
                        title: string;
                        type: string;
                        enum: number[];
                        default: number;
                    };
                    spacing: {
                        title: string;
                        type: string;
                        enum: number[];
                    };
                };
            };
            boxList: {
                minItems: number;
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        __editorItemTitle: {
                            title: string;
                            type: string;
                        };
                        image: {
                            default: string;
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                        link: {
                            title: string;
                            type: string;
                        };
                        fullImage: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                    };
                };
            };
        };
    };
};
export default BoxFeaturedWrapper;
