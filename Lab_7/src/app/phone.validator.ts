import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (control.value && !phoneNumberRegex.test(control.value)) {
      return { 'invalidPhone': true };
    }

    return null;
  };
}
