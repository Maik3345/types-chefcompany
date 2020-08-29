interface HtmlRenderType {
    schemaName: string;
    htmlContent: string;
    image: string;
    imageUrl: string;
    customClass: string;
    showComponent: boolean;
}
declare const HtmlRender: StorefrontFunctionComponent<HtmlRenderType>;
export default HtmlRender;
