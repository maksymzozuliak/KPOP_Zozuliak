import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<label>Введіть ім’я:</label>
//                  <input [(ngModel)]="name" placeholder="name">
//                  <h1>Ласкаво просимо {{name}}!</h1>`
// })
// export class AppComponent {
//     name= '';
// }

// @Component({
//     selector: 'my-app',
//     template: `<child-comp><h2>Ласкаво просимо {{name}}!</h2></child-comp>`,
//     styles: [`h2, p {color:#333;}`]
// })
// export class AppComponent {
//     name = 'Максим';
// }

@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
				<input type="text" [(ngModel)]="name" />
                <input type="number" [(ngModel)]="age"/>`,
    styleUrls: ['./app.component.css'],
    // templateUrl: './app.component.html'
})
export class AppComponent {
    name:string="Максим";
    age:number = 19;
}

