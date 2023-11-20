import { DfnAlert } from "designSystemComponents/components";

declare module "vue" {
  export interface GlobalComponents {
    DfnAlert: typeof DfnAlert;
  }
}
