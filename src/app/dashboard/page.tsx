// app/dashboard/page.tsx
'use client';

import { useAuth } from '@/components/auth-provider';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/auth/login');
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          
          {user && (
            <div className="mb-6">
              <p className="text-gray-600">
                You are logged in as:
              </p>
              <p className="font-medium">{user.email}</p>
            </div>
          )}
          
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}