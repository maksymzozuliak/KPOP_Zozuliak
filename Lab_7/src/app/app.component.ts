import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { phoneValidator } from './phone.validator';
import {minLengthValidator} from "./min.length.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  public formData: Resume = new Resume();
  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm()
  }
  onSubmit(): void {
    console.log(this.form.value);
    if (this.checkForErrors()) {
      console.log(this.formData)
      this.formData.fromFormGroup(this.form)
    }
  }

  checkForErrors(): boolean {

    if (this.form.get("name")?.hasError('required') ||
      this.form.get("email")?.hasError('required')||
      this.form.get("age")?.hasError('required')) {
      this.form.get("name")?.markAsTouched()
      this.form.get("email")?.markAsTouched()
      this.form.get("age")?.markAsTouched()
      return false;
    }

    return true;
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', phoneValidator()],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(110)]],
      personalInfo: ['', minLengthValidator(20)],
      gender: ['female'],
      animals: this.fb.array([])
    });
  }

  toggleAnimal(animal: string): void {
    const animalsArray = this.form.get('animals') as FormArray;
    if (animalsArray.value.includes(animal)) {
      const index = animalsArray.value.indexOf(animal);
      animalsArray.removeAt(index);
    } else {
      animalsArray.push(this.fb.control(animal));
    }
  }

  findGolub(): boolean {
    const animalsArray = this.form.get('animals') as FormArray;
    return animalsArray.value.includes('Голуб')
  }
}

export class Resume {
  public name: string = '';
  public phone: string = '';
  public email: string = '';

  public age: string = '';
  public gender: string = '';
  public personalInfo: string = '';

  public animals: string[] = [];

  fromFormGroup(data?: FormGroup) {
    this.name = data?.get('name')?.value
    this.phone = data?.get('phone')?.value
    this.email = data?.get('email')?.value
    this.age = data?.get('age')?.value
    this.gender = data?.get('gender')?.value
    this.personalInfo = data?.get('personalInfo')?.value
    this.animals = data?.get('animals')?.value
  }
  constructor(data?: {
    personalInfo: string;
    gender: string;
    phone: string;
    name: string;
    animals: string[];
    email: string;
    age: string
  }) {
    Object.assign(this, data);
  }
}
