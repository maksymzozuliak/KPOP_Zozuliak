import {Injectable, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavoriteTasksService {
  private favoriteTasksKey = 'favoriteTasks';

  constructor(private storage: Storage) {}

  async initDatabase() {
    await this.storage.create();
  }
  async getFavoriteTasks(): Promise<any[]> {
    const favoriteTasks = await this.storage.get(this.favoriteTasksKey);
    return favoriteTasks || [];
  }

  async addToFavorites(task: any): Promise<void> {
    const favoriteTasks = await this.getFavoriteTasks();
    favoriteTasks.push(task);
    await this.storage.set(this.favoriteTasksKey, favoriteTasks);
  }
}
