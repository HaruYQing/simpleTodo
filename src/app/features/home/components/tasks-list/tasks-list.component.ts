import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TasksService } from '../tasks-list.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [MatCardModule, TaskCardComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  private tasksService = inject(TasksService);

  demoTasks = computed(() => {
    switch (this.tasksService.selectedFilter()) {
      case 'all':
        return this.tasksService.allTasks();
      case 'inProgress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'inProgress');
      case 'pending':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'pending');
      case 'completed':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'completed');
      default:
        return this.tasksService.allTasks();
    }
  });
}
