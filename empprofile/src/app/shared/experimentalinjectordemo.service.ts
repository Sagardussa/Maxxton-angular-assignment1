import { Inject, Injectable } from '@angular/core';
import { Appconfig, APP_CONFIG } from './appconfig';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalinjectordemoService {
  component = 'root';
  constructor(@Inject(APP_CONFIG) private config: Appconfig) {
    console.log(config);
  }
  log(msg: string) {
    return console.log(
      ` component ${this.component} Experimental message: ${msg}`
    );
  }
}
