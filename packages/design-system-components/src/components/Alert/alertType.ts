// eslint-disable-next-line no-shadow
export enum AlertType {
    success = 'success',
    warning = 'warning',
    info = 'info',
    danger = 'danger'
}
export interface AlertProps {
    type: AlertType;
    title?: string;
    description?: string;
    buttonLabel?: string;
    handleButton?: () => void;
    center?: boolean;
}
