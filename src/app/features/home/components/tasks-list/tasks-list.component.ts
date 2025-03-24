import { Component, computed, inject } from '@angular/core';
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
  demoTasks = computed(() => this.tasksService.DummyTasks);
}
