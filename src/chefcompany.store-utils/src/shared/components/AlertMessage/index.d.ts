/// <reference types="react" />
import { AlertProps } from '@material-ui/lab';
declare type Props = {
    showAlert: boolean;
    handleClose?(): void;
    message: string;
    alert: AlertProps;
};
export declare function AlertMessage(props: Props): JSX.Element;
export {};
