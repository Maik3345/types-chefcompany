/// <reference types="react" />
interface InfoCardType {
    schemaName: string;
    image: {
        customClassSeo: string;
        customAltSeo: string;
        customIdSeo: string;
        url: string;
        web: string;
        maxWidth: string;
        mobile: string;
        linkTarget: string;
    };
}
declare const InfoCard: {
    (props: InfoCardType): JSX.Element;
    getSchema(props: InfoCardType): {
        title: any;
        type: string;
        properties: {
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
};
export default InfoCard;
