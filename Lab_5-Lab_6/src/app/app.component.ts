import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from './task-details/task-details.component';
import {FavoriteTasksService} from "./favorite-tasks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService],
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  favoriteTasks: any[] = [];

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private favoriteTasksService: FavoriteTasksService
  ) {}

  ngOnInit() {
    this.favoriteTasksService.initDatabase()
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
    this.loadFavoriteTasks();
  }

  openDetailsDialog(task: any): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '250px',
      data: task,
    });

    dialogRef.componentInstance.addToFavoritesClicked.subscribe((taskData: any) => {
      this.addToFavorites(taskData);
    });
  }

  async loadFavoriteTasks() {
    this.favoriteTasks = await this.favoriteTasksService.getFavoriteTasks();
    console.log(this.favoriteTasks)
  }

  async addToFavorites(task: any) {
    await this.favoriteTasksService.addToFavorites(task);
    this.loadFavoriteTasks();
  }
}
