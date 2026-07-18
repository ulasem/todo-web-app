export interface Task {
  id?: number;
  title: string;
  description?: string;
  is_completed: boolean;
  priority: number;
  created_at?: string;
}
