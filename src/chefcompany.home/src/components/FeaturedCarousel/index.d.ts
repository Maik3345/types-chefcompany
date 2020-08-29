interface FeaturedImagesList {
    image: string;
    mobileImage: string;
    description: string;
    url: string;
}
interface FeaturedProps {
    images: FeaturedImagesList[];
}
declare const FeaturedCarousel: StorefrontFunctionComponent<FeaturedProps>;
export default FeaturedCarousel;
