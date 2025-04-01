import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskStatus } from './task.model';
import { TasksService } from '../tasks-list.service';
import {
  MatSnackBar,
  // MatSnackBarHorizontalPosition,
  // MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'top';

  private tasksService = inject(TasksService);
  private _snackBar = inject(MatSnackBar);
  public dialog = inject(MatDialog);

  onChangeStatus({ taskId, status }: { taskId: string; status: TaskStatus }) {
    this.tasksService.updateTaskStatus(taskId, status);
  }

  openDialog(taskData: Task) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: {
        ...taskData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result: ' + result);
    });
  }

  onStartEdit(taskId: string) {
    const editTarget = this.tasksService.findTask(taskId);
    if (!editTarget) {
      alert("Can't find the data :(");
      return;
    }
    this.openDialog({
      id: editTarget.id,
      title: editTarget.title,
      description: editTarget.description,
      category: editTarget.category,
      dueDate: editTarget.dueDate,
      status: editTarget.status,
    });
  }

  openSnackBar() {
    this._snackBar.open('Task removed', 'OK', {
      // horizontalPosition: this.horizontalPosition,
      // verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  onDelete(taskId: string) {
    this.tasksService.deleteTask(taskId);
    this.openSnackBar();
  }
}
