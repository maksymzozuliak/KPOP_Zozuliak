import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
