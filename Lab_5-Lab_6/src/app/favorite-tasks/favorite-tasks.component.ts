import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-tasks',
  templateUrl: './favorite-tasks.component.html',
  styleUrls: ['./favorite-tasks.component.css'],
})
export class FavoriteTasksComponent {
  @Input() favoriteTasks: any[] = [];

}
