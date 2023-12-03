import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введіть ім’я:</label>
                 <input [(ngModel)]="newName" placeholder="name">
                 <button (click)="addName()">Додати ім'я</button>
                 <ul>
                     <h1 *ngFor="let name of names; let i = index">{{ i + 1 }}. {{ name }}</h1>
                 </ul>`,
})
export class NameListComponent {
    newName: string = '';
    names: string[] = [];

    addName() {
        if (this.newName.trim() !== '') {
            this.names.push(this.newName);
            this.newName = '';
        }
    }
}
