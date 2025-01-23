'use client';

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Profile = () => {
  const { isAuthenticated, isLoading, getUser } = useKindeAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isLoading) return;  // Wait for loading to finish

      const user = await getUser();  // Get user data after loading
      if (!isAuthenticated || !user) {
        router.push('/api/auth/login');  // Redirect to login if not authenticated
      } else {
        setLoading(false);  // Set loading to false if user is authenticated
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, router, getUser]);

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Welcome to your profile!</h1>
      <p className="text-lg text-center mt-4">This is a protected page, accessible only to authenticated users.</p>
    </div>
  );
};

export default Profile;
