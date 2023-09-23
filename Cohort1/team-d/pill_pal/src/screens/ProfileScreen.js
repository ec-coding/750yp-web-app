import { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Avatar, Text } from 'react-native-paper';

import { useUserAuth } from '../../src/hooks/useUserAuth';

export default function ProfileScreen() {
  const { loading, profile, logout, updateProfile, session } = useUserAuth();
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');

  const handleSetUserName = useCallback((text) => {
    setUsername(text);
  }, []);

  const handleSetWebsite = useCallback((text) => {
    setWebsite(text);
  }, []);

  const handleUpdateProfile = useCallback(() => {
    updateProfile({ username, website });
  }, [username, website]);

  const handleLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Update Profile</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Text size={70} label={session?.user?.email?.charAt(0).toUpperCase()} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} value={session?.user?.email} disabled />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          value={username || profile?.username || ''}
          onChangeText={handleSetUserName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Website</Text>
        <TextInput
          style={styles.input}
          value={website || profile?.website || ''}
          onChangeText={handleSetWebsite}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleUpdateProfile}
          disabled={loading}
          style={styles.button}
          labelStyle={{ fontSize: 18 }}>
          {loading ? 'Loading...' : 'Update'}
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={handleLogout}
          style={styles.button}
          labelStyle={{ fontSize: 18 }}>
          Log out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 40,
  },
  avatarContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '100%',
  },
});
