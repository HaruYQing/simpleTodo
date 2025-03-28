import { Component, inject } from '@angular/core';
import { TaskStatus } from './../components/task-card/task.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../components/tasks-list.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedStatus: TaskStatus | 'all' = 'all';

  private tasksService = inject(TasksService);

  onSelect() {
    this.tasksService.getTasksByStatus(this.selectedStatus);
  }
}
