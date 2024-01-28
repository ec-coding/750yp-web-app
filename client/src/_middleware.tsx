import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dotenv from 'dotenv';

dotenv.config();

const fetchUserRoles = async (userId:any, authToken:string) => {
  const url = `https://${process.env.AUTH_AUDIENCE!}/api/v2/users/${userId}/roles`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user roles');
    }

    const data = await response.json();
    return data[0]?.name || '';
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return '';
  }
};

const withAuth = (WrappedComponent: any, allowedRoles: any) => {
  const Wrapper = (props:any) => {
    const { user, isLoading } = useUser();
    const [role, setRole] = useState('');
    const router = useRouter();


    useEffect(() => {
      if (user) {
        const authToken = process.env.AUTH_TOKEN;
        fetchUserRoles(user.sub, authToken!).then((userRole) => {
          setRole(userRole);
        });
      }
    }, [user]);

    if (isLoading) {
      return <p></p>;
    }

    if (!user || !allowedRoles.includes(role)) {
     router.push('/');
     return
     
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
