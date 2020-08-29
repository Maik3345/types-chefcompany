/// <reference types="react" />
import { FooterType } from '../../shared';
declare const Footer: {
    (props: FooterType): JSX.Element;
    defaultProps: FooterType;
    getSchema(props: FooterType): {
        dependencies: {
            typeConfiguration: {
                oneOf: ({
                    properties: {
                        typeConfiguration: {
                            enum: string[];
                        };
                        columns: {
                            title: string;
                            type: string;
                            properties: {
                                show: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                                alignCollapse: {
                                    title: string;
                                    type: string;
                                    default: string;
                                    enum: string[];
                                };
                                collapseOnWeb: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                                hideWhenIsMobile: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                                links: {
                                    default: import("../../shared").LinksType[];
                                    minItems: number;
                                    title: string;
                                    type: string;
                                    items: {
                                        properties: {
                                            title: {
                                                title: string;
                                                type: string;
                                            };
                                            icon: {
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
                                                        default: number;
                                                        description: string;
                                                    };
                                                };
                                            };
                                            linksItems: {
                                                minItems: number;
                                                title: string;
                                                type: string;
                                                items: {
                                                    properties: {
                                                        isExternal: {
                                                            title: string;
                                                            type: string;
                                                            default: boolean;
                                                        };
                                                        icon: {
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
                                                                    default: number;
                                                                    description: string;
                                                                };
                                                            };
                                                        };
                                                        seo: {
                                                            title: string;
                                                            type: string;
                                                            properties: {
                                                                class: {
                                                                    title: string;
                                                                    type: string;
                                                                };
                                                                id: {
                                                                    title: string;
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        text: {
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
                            };
                        };
                        logo?: undefined;
                        information?: undefined;
                        social?: undefined;
                    };
                } | {
                    properties: {
                        typeConfiguration: {
                            enum: string[];
                        };
                        logo: {
                            title: string;
                            type: string;
                            properties: {
                                show: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                                text: {
                                    title: string;
                                    type: string;
                                    properties: {
                                        title: {
                                            title: string;
                                            type: string;
                                            default: string;
                                        };
                                        message: {
                                            title: string;
                                            type: string;
                                            default: string;
                                        };
                                    };
                                };
                                image: {
                                    title: string;
                                    type: string;
                                    properties: {
                                        alt: {
                                            title: string;
                                            type: string;
                                            default: string;
                                        };
                                        logoUrl: {
                                            title: string;
                                            type: string;
                                            default: string;
                                            widget: {
                                                'ui:widget': string;
                                            };
                                        };
                                        url: {
                                            title: string;
                                            type: string;
                                            default: string;
                                        };
                                        height: {
                                            title: string;
                                            type: string;
                                            properties: {
                                                mobile: {
                                                    title: string;
                                                    type: string;
                                                    default: string;
                                                };
                                                web: {
                                                    title: string;
                                                    type: string;
                                                    default: string;
                                                };
                                            };
                                        };
                                        width: {
                                            title: string;
                                            type: string;
                                            properties: {
                                                mobile: {
                                                    title: string;
                                                    type: string;
                                                    default: string;
                                                };
                                                web: {
                                                    title: string;
                                                    type: string;
                                                    default: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        columns?: undefined;
                        information?: undefined;
                        social?: undefined;
                    };
                } | {
                    properties: {
                        typeConfiguration: {
                            enum: string[];
                        };
                        information: {
                            title: string;
                            type: string;
                            properties: {
                                show: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                            };
                        };
                        columns?: undefined;
                        logo?: undefined;
                        social?: undefined;
                    };
                } | {
                    properties: {
                        typeConfiguration: {
                            enum: string[];
                        };
                        social: {
                            title: string;
                            type: string;
                            properties: {
                                show: {
                                    title: string;
                                    type: string;
                                    default: boolean;
                                };
                                icons: {
                                    default: import("../../shared").IconWithLinkType[];
                                    minItems: number;
                                    title: string;
                                    type: string;
                                    items: {
                                        properties: {
                                            id: {
                                                title: string;
                                                type: string;
                                                enum: string[];
                                            };
                                            url: {
                                                title: string;
                                                type: string;
                                            };
                                            seo: {
                                                title: string;
                                                type: string;
                                                properties: {
                                                    class: {
                                                        title: string;
                                                        type: string;
                                                    };
                                                    id: {
                                                        title: string;
                                                        type: string;
                                                    };
                                                };
                                            };
                                            size: {
                                                title: string;
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        columns?: undefined;
                        logo?: undefined;
                        information?: undefined;
                    };
                })[];
            };
        };
        title: string;
        type: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            image: {
                title: string;
                description: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            imageUrl: {
                title: string;
                description: string;
                type: string;
            };
            typeConfiguration: {
                title: string;
                enum: string[];
                enumNames: string[];
                widget: {
                    'ui:widget': string;
                };
                default: string;
            };
        };
    };
};
export default Footer;
