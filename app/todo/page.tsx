'use client';

import { useState, useEffect } from 'react';
import { fetchTasks } from '../../lib/api';
import { Task } from '../../types/task';
import Link from 'next/link';

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  if (loading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main>
      <nav>
        <Link href="/">← Back to Home</Link>
      </nav>

      <h1>My Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <article>
                <h2>{task.title}</h2>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.is_completed ? 'Completed' : 'In Progress'}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
