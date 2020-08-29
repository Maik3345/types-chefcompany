export interface SpacingType {
    web: string;
    mobile: string;
}
export interface ImageType {
    customClassSeo: string;
    customAltSeo: string;
    customIdSeo: string;
    url: string;
    web: string;
    maxWidth: string;
    mobile: string;
    linkTarget: string;
}
export interface InfoCardType {
    showComponent: boolean;
    schemaName: string;
    padding: SpacingType;
    margin: SpacingType;
    image: ImageType;
}
export interface RenderImageType {
    image: ImageType;
    isMobile: boolean;
    margin: SpacingType;
    padding: SpacingType;
    schemaName: string;
}
