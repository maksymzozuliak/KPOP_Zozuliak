import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NameListComponent }   from './name_list.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ NameListComponent ],
    bootstrap:    [ NameListComponent ]
})
export class NameListModule { }
