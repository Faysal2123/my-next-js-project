import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {LogoutLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from 'next/image';

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gray-200 p-2">
      <div className="container mx-auto flex justify-between p-4 items-center">
        {/* Logo */}
        <div>
       
            <Image
              src="/images/logo2.png"
              alt="logo Image"
              width={40}
              height={40}
            />
       
        </div>

        {/* Navigation */}
        <div>
          <ul className="flex space-x-4 items-center text-lg">
            <li>
              <Link
                className="btn border border-gray-500 px-2 py-2 rounded-md"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="btn border border-gray-500 px-2 py-2 rounded-md"
                href="/profile"
              >
                Profile
              </Link>
            </li>
          
            <li>
              {user ? (
                <LogoutLink
                  href="/api/auth/logout"
                  className="btn border border-gray-500 px-2 py-1 rounded-md"
                >
                  Logout
                </LogoutLink>
              ) : (
                <LoginLink
                  href="/api/auth/login"
                  className="btn border border-gray-500 px-2 py-1 rounded-md"
                >
                  Login
                </LoginLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
