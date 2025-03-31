import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UIStateService {
  isAddTaskVisible = signal(false);

  onOpen() {
    this.isAddTaskVisible.set(true);
  }

  onClose() {
    this.isAddTaskVisible.set(false);
  }
}
