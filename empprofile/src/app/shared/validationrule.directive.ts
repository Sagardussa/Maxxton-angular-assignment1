import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appValidationrule]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidationruleDirective,
      multi: true,
    },
  ],
})
export class ValidationruleDirective implements Validators {
  validate(constrol: AbstractControl): { [key: string]: any } | null {
    return constrol.value == null ? { haserr: true } : null;
  }
}
