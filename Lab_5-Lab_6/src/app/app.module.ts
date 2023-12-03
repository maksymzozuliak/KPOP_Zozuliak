import { HttpClientModule } from '@angular/common/http';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicStorageModule } from '@ionic/storage-angular';
import {FavoriteTasksComponent} from "./favorite-tasks/favorite-tasks.component";
@NgModule({
  declarations: [
    AppComponent,
    FavoriteTasksComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
