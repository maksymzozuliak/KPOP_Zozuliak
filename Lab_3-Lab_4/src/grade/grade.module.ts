import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './grade.main_component';
import {ChildComponent} from "./grade.child_component";
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [AppComponent, ChildComponent],
    bootstrap:    [ AppComponent ]
})
export class GradeModule { }
