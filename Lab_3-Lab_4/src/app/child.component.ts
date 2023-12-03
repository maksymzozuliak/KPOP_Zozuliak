import { Input, Component } from '@angular/core';

// @Component({
//     selector: 'child-comp',
//     template: `<ng-content></ng-content>
//                 <p>Привіт {{name}}</p>`,
//     styles: [`h2, p {color:navy;}`]
// })
// export class ChildComponent {
//     name= "Максим";
// }

@Component({
    selector: 'child-comp',
    template: `<p>Ім'я користувача: {{userName}}</p>
			  <p>Вік користувача: {{userAge}}</p>`
})
export class ChildComponent{
    @Input() userName: string;
    _userAge: number;

    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }
    get userAge() { return this._userAge; }

}
