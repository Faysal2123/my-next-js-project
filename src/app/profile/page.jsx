'use client';  // Mark as client-side component to use hooks like useKindeAuth

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';  // Import Kinde Auth hook
import { useRouter } from 'next/navigation';  // For redirecting user

const Profile = () => {
  const { isAuthenticated } = useKindeAuth();  // Check if the user is authenticated
  const router = useRouter();  // Use router for redirection

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    router.push('/api/auth/login');
    return <div>Redirecting...</div>;  // Optionally, show loading state
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Welcome to your profile!</h1>
      <p className="text-lg text-center mt-4">This is a protected page, accessible only to authenticated users.</p>
    </div>
  );
};

export default Profile;
