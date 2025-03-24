import { Injectable } from '@angular/core';
import { Task, TaskStatus } from './task-card/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  DummyTasks: Task[] = [
    {
      id: '1',
      title: 'Buy groceries',
      category: 'personal',
      dueDate: '2025-04-01',
      description: 'Buy milk, bread, and eggs.',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Upload documents',
      category: 'work',
      dueDate: '2025-03-25',
      description: 'New project meeting docs.',
      status: 'inProgress',
    },
    {
      id: '3',
      title: 'Call Mom',
      category: 'personal',
      dueDate: '2025-03-14',
      description: 'Tell her that I sent a gift.',
      status: 'complete',
    },
    {
      id: '4',
      title: 'Update records',
      category: 'work',
      dueDate: '2025-03-12',
      description: 'Submit to the manager.',
      status: 'inProgress',
    },
  ];

  setTaskStatus(taskId: string, status: TaskStatus) {
    const task = this.DummyTasks.find((task) => task.id === taskId);
    if (task) {
      task.status = status;
    }
  }
}
