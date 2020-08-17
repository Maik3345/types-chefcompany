import { ReactNode } from 'react';
export interface WithLabelProps {
    label: string;
    blockClass: string;
    children: ReactNode;
}
declare const WithLabel: ({ label, blockClass, children }: WithLabelProps) => JSX.Element;
export default WithLabel;
