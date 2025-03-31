import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskStatus } from './task.model';
import { TasksService } from '../tasks-list.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();

  private taskService = inject(TasksService);

  onChangeStatus({ taskId, status }: { taskId: string; status: TaskStatus }) {
    this.taskService.updateTaskStatus(taskId, status);
  }

  onDelete(taskId: string) {
    alert('Delete task with ID: ' + taskId);
  }
}
