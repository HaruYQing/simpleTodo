import { Injectable, signal } from '@angular/core';
import { Task, TaskInputData, TaskStatus } from './task-card/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private DummyTasks = signal<Task[]>([
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
      status: 'completed',
    },
    {
      id: '4',
      title: 'Update records',
      category: 'work',
      dueDate: '2025-03-12',
      description: 'Submit to the manager.',
      status: 'inProgress',
    },
  ]);

  selectedFilter = signal<'all' | TaskStatus>('all');
  allTasks = this.DummyTasks.asReadonly();

  addTask(taskData: TaskInputData) {
    const newTask: Task = {
      ...taskData,
      id: uuidv4(),
      status: 'inProgress',
    };
    this.DummyTasks.update((prev) => [...prev, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.DummyTasks.update((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  deleteTask(taskId: string) {
    this.DummyTasks.update((prev) => prev.filter((task) => task.id !== taskId));
  }
}
