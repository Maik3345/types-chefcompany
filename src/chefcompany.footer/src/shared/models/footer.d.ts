import { ReactElement } from 'react';
export interface FooterChildType {
    isMobile: boolean;
}
export interface Configuration {
    show: boolean;
}
export interface SeoType {
    class: string;
    id: string;
}
export interface IconType {
    id: string;
    size: number;
}
export interface IconWithLinkType extends IconType {
    url: string;
    seo: SeoType;
}
export interface LinksItemsType {
    seo: SeoType;
    url: string;
    text: string;
    isExternal: boolean;
    icon: IconType;
}
export interface LinksType {
    title: string;
    icon: IconType | null;
    linksItems: LinksItemsType[];
}
export interface LogoConfigType extends Configuration {
    text?: {
        title: string;
        message: string;
    };
    image?: {
        alt: string;
        url: string;
        logoUrl: string;
        width: {
            web: string;
            mobile: string;
        };
        height: {
            web: string;
            mobile: string;
        };
    };
}
export interface ColumnsLinksConfigType extends Configuration {
    links?: LinksType[];
    alignCollapse: string;
    collapseOnWeb: boolean;
    hideWhenIsMobile: boolean;
}
export interface SocialConfigType extends Configuration {
    icons?: IconWithLinkType[];
}
export interface InformationConfigType extends Configuration {
    children?: ReactElement;
}
export interface FooterType {
    image: string;
    children?: ReactElement;
    logo: LogoConfigType;
    columns: ColumnsLinksConfigType;
    social: SocialConfigType;
    information: InformationConfigType;
}
