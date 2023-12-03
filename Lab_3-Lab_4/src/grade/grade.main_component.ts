import { Component } from '@angular/core';

export interface Grade {
    name: string;
    grade: number;
}

@Component({
    selector: 'my-app',
    templateUrl: './grade.main.html',
    styleUrls: ['./grade.main.css'],
})
export class AppComponent {
    newName: string = '';
    newGrade: number;
    grades: Grade[] = [];

    addGrade() {
        if (this.newName.trim() !== '') {
            if (this.newGrade > 12) {
                this.newGrade = 12
            } else if (this.newGrade < 0) {
                this.newGrade = 0
            }
            this.grades = [...this.grades, { name: this.newName, grade: this.newGrade }];
            this.newName = '';
            this.newGrade = null;
        }
    }
}
