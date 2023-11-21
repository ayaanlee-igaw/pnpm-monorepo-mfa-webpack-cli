import { DfnAlert } from "shared/components";

declare module "vue" {
  export interface GlobalComponents {
    DfnAlert: typeof DfnAlert;
  }
}
