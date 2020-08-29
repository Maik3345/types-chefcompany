interface DepartmentImagesType {
    image: string;
    mobileImage: string;
    description: string;
    url: string;
}
interface Props {
    images: DepartmentImagesType[];
}
declare const DepartmentsGrid: StorefrontFunctionComponent<Props>;
export default DepartmentsGrid;
