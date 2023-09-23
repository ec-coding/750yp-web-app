import 'react-native-url-polyfill/auto';
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';

import { supabase } from '../../config/supabase';

const UserAuthContext = createContext(null);

function UserAuth({ children }) {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  const logout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      Alert.alert('Logged out successfully!');
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setLoading(false);
        Alert.alert(error.error_description || error.message);
      }
    } catch (error) {
      Alert.alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    try {
      setLoading(true);
      await supabase.auth.signUp({
        email,
        password,
      });
      Alert.alert('Check your email for the login link!');
    } catch (error) {
      Alert.alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProfile = async () => {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async ({ username, website, avatar_url }) => {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const values = useMemo(
    () => ({
      session,
      loading,
      login,
      logout,
      signup,
      profile,
      updateProfile,
    }),
    [session, loading, profile]
  );

  return <UserAuthContext.Provider value={values}>{children}</UserAuthContext.Provider>;
}

export { UserAuth, UserAuthContext };
