import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the TODO App</h1>
      <nav>
        <Link href="/tasks">View My Tasks</Link>
      </nav>
    </main>
  );
}
