import Alert from "@/components/dfn-alert/dfn-alert.vue";
import { AlertProps } from "@/components/dfn-alert/dfn-alert-type";
import { DefineComponent } from "vue";

export const DfnAlert = Alert as DefineComponent<AlertProps, any, any>;
