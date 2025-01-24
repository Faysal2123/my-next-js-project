'use client'; 

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';  
import { useRouter } from 'next/navigation'; 

const Profile = () => {
  const { isAuthenticated } = useKindeAuth();  
  const router = useRouter();  

  
  if (!isAuthenticated) {
    router.push('/api/auth/login');
    return <div>Redirecting...</div>;  
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Welcome to your profile!</h1>
      <p className="text-lg text-center mt-4">This is a protected page, accessible only to authenticated users.</p>
    </div>
  );
};

export default Profile;
