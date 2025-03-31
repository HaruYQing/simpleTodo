import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TasksService } from '../tasks-list.service';
import { TaskCategory, TaskInputData } from '../task-card/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  private formElement = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService = inject(TasksService);

  enteredDate: Date | null = null;

  taskData: TaskInputData = {
    title: '',
    description: '',
    category: 'personal',
    dueDate: '',
  };

  onDateChange(date: Date) {
    this.taskData.dueDate = date ? date.toLocaleDateString() : '1990-01-01';
  }

  onSubmit() {
    this.tasksService.addTask(this.taskData);
    this.formElement()?.nativeElement.reset();
  }
}
