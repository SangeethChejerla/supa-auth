// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <div className="space-x-4">
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Sign In
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}