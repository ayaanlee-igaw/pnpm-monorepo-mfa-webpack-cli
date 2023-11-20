declare module "designSystemComponents/router" {
    const router: import("vue-router").Router;
    export default router;
}
declare module "#not-for-import/designSystemComponents/components/Alert/alertType" {
    export enum AlertType {
        success = "success",
        warning = "warning",
        info = "info",
        danger = "danger"
    }
    export interface AlertProps {
        type: AlertType;
        title?: string;
        description?: string;
        buttonLabel?: string;
        handleButton?: () => void;
        center?: boolean;
    }
}
declare module "designSystemComponents/components" {
    import { AlertProps } from "#not-for-import/designSystemComponents/components/Alert/alertType";
    import { DefineComponent } from "vue";
    export const DfnAlert: DefineComponent<AlertProps, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<AlertProps>, {}, {}>;
}
