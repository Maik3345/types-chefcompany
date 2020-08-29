import { InfoCardType } from '../../shared';
export declare const DEFAULT_PROPS: InfoCardType;
export declare const schemaInfoCard: (title: string) => {
    title: string;
    type: string;
    properties: {
        showComponent: {
            title: string;
            type: string;
            default: boolean;
        };
        padding: {
            type: string;
            title: string;
            properties: {
                web: {
                    title: string;
                    type: string;
                    default: string;
                };
                mobile: {
                    title: string;
                    type: string;
                    default: string;
                };
            };
        };
        margin: {
            type: string;
            title: string;
            properties: {
                web: {
                    title: string;
                    type: string;
                    default: string;
                };
                mobile: {
                    title: string;
                    type: string;
                    default: string;
                };
            };
        };
        image: {
            type: string;
            title: string;
            properties: {
                maxWidth: {
                    title: string;
                    type: string;
                    default: string;
                };
                url: {
                    title: string;
                    type: string;
                    default: string;
                };
                customClassSeo: {
                    title: string;
                    type: string;
                    default: string;
                };
                customAltSeo: {
                    title: string;
                    type: string;
                    default: string;
                };
                customIdSeo: {
                    title: string;
                    type: string;
                    default: string;
                };
                linkTarget: {
                    title: string;
                    descriptions: string;
                    type: string;
                    default: string;
                };
                web: {
                    title: string;
                    type: string;
                    default: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                mobile: {
                    title: string;
                    type: string;
                    default: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
            };
        };
    };
};
