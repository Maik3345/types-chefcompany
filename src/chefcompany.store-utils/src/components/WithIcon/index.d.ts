import { ReactNode } from 'react';
export interface WithIconProps {
    id: string;
    blockClass: string;
    size: number;
    children: ReactNode;
}
declare const WithIcon: ({ id, blockClass, size, children }: WithIconProps) => JSX.Element;
export default WithIcon;
