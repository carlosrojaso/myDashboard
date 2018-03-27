import { InjectionToken } from "@angular/core";
import { RouterLink } from "@angular/router/src/directives/router_link";
export class DashboardCard {

  static metadata:any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(
    private _input: {
      key: InjectionToken<string>,
      RouterLink
    }
  ){

  }
}
