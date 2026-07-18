import { Task } from '../types/task';

const API_URL = 'http://127.0.0.1:8000';

export const fetchTasks = async (query = ''): Promise<Task[]> => {
  const response = await fetch(`${API_URL}/tasks/${query}`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const createTask = async (task: Omit<Task, 'id' | 'created_at'>): Promise<Task> => {
  const response = await fetch(`${API_URL}/tasks/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
};

export const updateTask = async (id: number, updates: Partial<Task>): Promise<Task> => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return response.json();
};
