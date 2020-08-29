/// <reference types="react" />
import { FooterChildType, ColumnsLinksConfigType } from '../../../../shared';
interface ColumnLinksType extends FooterChildType {
    columns: ColumnsLinksConfigType;
}
declare const ColumnLinks: (props: ColumnLinksType) => JSX.Element;
export default ColumnLinks;
