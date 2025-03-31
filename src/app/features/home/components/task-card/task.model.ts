export type TaskStatus = 'inProgress' | 'pending' | 'completed';

export type TaskCategory = 'work' | 'personal';

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  dueDate: string;
  description: string;
  status: TaskStatus;
}

export interface TaskInputData {
  title: string;
  category: TaskCategory;
  dueDate: string;
  description: string;
}
