import {Component, Input} from "@angular/core";
import {Grade} from "./grade.main_component";

@Component({
    selector: 'child-comp',
    templateUrl: './grade.child.html',
    styleUrls: ['./grade.child.css'],
})
export class ChildComponent{

    _grades: Grade[] = []
    avg: number = 0

    @Input()
    set grades(grades: Grade[]) {
        this._grades = grades
        let sum = 0;

        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i].grade;
        }
        this.avg = this.grades.length > 0 ? sum / this.grades.length : 0;
    }

    get grades() { return this._grades; }
}
