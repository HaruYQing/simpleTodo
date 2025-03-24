export type TaskStatus = 'inProgress' | 'pending' | 'complete';

export type TaskCategory = 'work' | 'personal';

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  dueDate: string;
  description: string;
  status: TaskStatus;
}
