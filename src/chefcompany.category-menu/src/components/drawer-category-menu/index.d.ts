/// <reference types="react" />
declare const CategoryMenuDrawer: {
    (props: any): JSX.Element;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            departments: {
                minItems: number;
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        title: {
                            title: string;
                            type: string;
                        };
                        url: {
                            title: string;
                            type: string;
                        };
                        ico: {
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                        color: {
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                            default: string;
                        };
                        blod: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        categories: {
                            minItems: number;
                            title: string;
                            type: string;
                            items: {
                                title: string;
                                type: string;
                                properties: {
                                    title: {
                                        title: string;
                                        type: string;
                                    };
                                    url: {
                                        title: string;
                                        type: string;
                                    };
                                    ico: {
                                        title: string;
                                        type: string;
                                        widget: {
                                            'ui:widget': string;
                                        };
                                    };
                                    subcategories: {
                                        minItems: number;
                                        title: string;
                                        type: string;
                                        items: {
                                            title: string;
                                            type: string;
                                            properties: {
                                                title: {
                                                    title: string;
                                                    type: string;
                                                };
                                                url: {
                                                    title: string;
                                                    type: string;
                                                };
                                                ico: {
                                                    title: string;
                                                    type: string;
                                                    widget: {
                                                        'ui:widget': string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            additionalInfo: {
                minItems: number;
                title: string;
                type: string;
                maxItams: number;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        __editorItemTitle: {
                            title: string;
                            type: string;
                        };
                        url: {
                            title: string;
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
export default CategoryMenuDrawer;
