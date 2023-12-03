import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value || '';
    return value.length >= minLength ? null : { 'minLength': { requiredLength: minLength, actualLength: value.length } };
  };
}
