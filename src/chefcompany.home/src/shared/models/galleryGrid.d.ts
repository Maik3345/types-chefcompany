import { ReactElement } from 'react';
export declare type typeGrid = 'gridGalleryContainerOne' | 'gridGalleryContainerTwo' | 'gridGalleryContainerThree' | 'gridGalleryContainerFour';
interface SeoClass {
    altAttribute: string;
    titleAttribute: string;
    idAnalytics: string;
    classAnalytics: string;
}
interface ImageProps {
    image: string;
    height: string;
    borderRadius: string;
    width: string;
}
export interface ImageItem {
    web: ImageProps;
    mobile: ImageProps;
    url: string;
    seoAttribute: SeoClass;
}
export interface ImagesRows {
    typeGrid: typeGrid;
    images: ImageItem[];
    spacing: {
        web: {
            columnGap: string;
            gridRowGap: string;
        };
        mobile: {
            columnGap: string;
            gridRowGap: string;
        };
    };
    boxShadow: string;
    maxWidth: string;
    margin: string;
    padding: string;
}
export interface GridProps {
    schemaName: string;
    children?: ReactElement[];
    showComponent: boolean;
    backgroundContent: string;
    paddingContent: string;
    marginContent: string;
    rows: ImagesRows[];
}
export interface GridGalleryProps extends ImagesRows {
    isMobile: boolean;
}
export {};
