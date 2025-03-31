import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskStatus } from '../components/task-card/task.model';
import { TasksService } from '../components/tasks-list.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private tasksService = inject(TasksService);

  onChangeTaskFilter(filter: 'all' | TaskStatus) {
    this.tasksService.selectedFilter.set(filter);
  }
}
