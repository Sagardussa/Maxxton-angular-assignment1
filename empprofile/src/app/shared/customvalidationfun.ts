import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailcheck(
  control: AbstractControl
): { [key: string]: any } | null {
  const n = /^([a-zA-Z0-9_\#$\.]+)\@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/.test(
    control.value
  );
  return n ? null : { invalidemail: { err: 'Invalid Email format ' } };
}

export function checkNamestring(
  control: AbstractControl
): { [key: string]: any } | null {
  const s = /[a-zA-Z]/.test(
    control.value
  );
  return s ? null : { invalidString: { err: 'Invalid format ' } };
}


export function checknumber(
  control: AbstractControl
): { [key: string]: any } | null {
  const s = /[0-9]/.test(
    control.value
  );
  return s ? null : { invalidnumber: { err: 'allowed number ' } };
}
export function mobliecheck(
  control: AbstractControl
): { [key: string]: any } | null {
  const s = /^[0-9_-]{10,12}$/.test(
    control.value
  );
  return s ? null : { invalidmoblie: { err: '' } };
}



// export function checkskill(invalid: RegExp): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const n = invalid.test(control.value);
//     return n ? null : { invalidskill: { value: control.value } };
//   };
// }

// export function checkpwd(
//   control: AbstractControl
// ): { [key: string]: boolean } | null {
//   const pwd = control.get('pwd');
//   const cpwd = control.get('cpwd');
//   return pwd && cpwd && pwd.value !== cpwd.value ? { mismatch: true } : null;
// }

// export function usernamecheck(
//   control: AbstractControl
// ): { [key: string]: any } | null {
//   const n = /admin/.test(control.value);
//   return n ? { invalidname: { value: control.value } } : null;
// }