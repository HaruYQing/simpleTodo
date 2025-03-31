import { Component } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TasksListComponent, HeaderComponent, AddTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
