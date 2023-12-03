import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule, By} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Resume } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, BrowserModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty formData', () => {
    expect(component.formData.name).toBe('');
    expect(component.formData.phone).toBe('');
    expect(component.formData.email).toBe('');
  });

  it('should initialize with empty form', () => {
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('phone')?.value).toBe('');
    expect(component.form.get('email')?.value).toBe('');
  });

  it('should log formData when calling onSubmit', () => {
    spyOn(console, 'log');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.form.value);
  });

  it('should render the form and its elements', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('fieldset legend').textContent).toContain('Контактна інформація');
    expect(compiled.querySelector('#name')).toBeTruthy();
  });

  it('should toggle animals in the form data', () => {
    const initialAnimals = component.form.value.animals;

    component.toggleAnimal('Зебра');

    expect(component.form.value.animals).toEqual([...initialAnimals, 'Зебра']);
  });

  it('should show a required field error for name when it is empty', () => {
    component.form.get('name')?.setValue('');

    expect(component.form.get('name')?.hasError('required')).toBeTruthy();
  });

  it('should toggle checkboxes in the form data when UI checkboxes are clicked', () => {
    const compiled = fixture.nativeElement;

    compiled.querySelector('#zebra').click();

    expect(component.form.value.animals).toContain('Зебра');
  });

  it('should initialize an empty form', () => {
    component.initForm();
    expect(component.form.value).toEqual({
      name: '',
      phone: '',
      email: '',
      age: '',
      gender: 'female',
      personalInfo: '',
      animals: [],
    });
  });


  it('should reset the form data when the form is reset', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    fixture.detectChanges();
    form.patchValue({ phone: '42342' });
    component.form.reset()

    expect(component.form.get('phone')?.value).toEqual(null)
  });

  it('should add zebra to animals', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.toggleAnimal('Зебра')
    component.onSubmit();
    fixture.detectChanges();
    expect(component.form.get('animals')?.value).toEqual(['Зебра'])
  });

  it('should display error messages for required name when it is empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.get('name')?.markAsTouched();
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#name-error')?.textContent).toContain('Ім\'я є обов\'язковим полем.');
  });

  it('should display error messages for invalid number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.patchValue({ phone: '42342' });
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#phone-error')?.textContent).toContain('Неправильний номер.');
  });

  it('should display error messages for required email when it is empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.get('email')?.markAsTouched();
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#email1-error')?.textContent).toContain('Email є обов\'язковим полем.');
  });

  it('should display error messages for invalid email', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.patchValue({ email: 'fdfdsfsd' });
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#email2-error')?.textContent).toContain('Неправильний email.');
  });

  it('should display error messages for required age when it is empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.get('age')?.markAsTouched();
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#age1-error')?.textContent).toContain(' Вік є обов\'язковим полем.');
  });

  it('should display error messages for age out of range', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.patchValue({ age: '232' });
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#age2-error')?.textContent).toContain('Вік має бути від 1 до 110.');
  });

  it('should display error messages for short personalInformation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    form.patchValue({ personalInfo: 'Hello world' });
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#personalInfo-error')?.textContent).toContain('Мінімум 20 символів.');
  });

  it('should display error messages for golub', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.toggleAnimal('Голуб')
    component.onSubmit();
    fixture.detectChanges();
    expect(compiled.querySelector('#golub-error')?.textContent).toContain('Неправда, ніхто не любить голубів.');
  });

  it('should extract values from FormGroup', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.initForm();
    const form = component.form;
    const resume = new Resume()
    resume.fromFormGroup(form)
    expect(resume.name).toBe(form.get('name')?.value);
    expect(resume.phone).toBe(form.get('phone')?.value);
    expect(resume.email).toBe(form.get('email')?.value);
    expect(resume.age).toBe(form.get('age')?.value);
    expect(resume.gender).toBe(form.get('gender')?.value);
    expect(resume.personalInfo).toBe(form.get('personalInfo')?.value);
    expect(resume.animals).toEqual(form.get('animals')?.value);
  });
});
