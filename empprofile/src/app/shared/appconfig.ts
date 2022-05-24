import { InjectionToken } from '@angular/core';

export interface Appconfig {
  experimenatilService: boolean;
}
export const APP_CONFIG = new InjectionToken<Appconfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    experimenatilService: true,
  }),
});
