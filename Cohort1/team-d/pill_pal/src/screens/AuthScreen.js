import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import 'react-native-url-polyfill/auto';

import { useUserAuth } from '../hooks';

const AuthScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const { loading, login, signup } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const image = () => {
    if (currentScreen === 'login') {
      return require('../../assets/images/pill_pal3.png');
    }
    return require('../../assets/images/pill_pal3.png');
  };

  const title = () => {
    if (currentScreen === 'login') {
      return 'Login';
    }
    return 'Signup';
  };

  const handleSetEmail = useCallback((text) => {
    setEmail(text);
  }, []);

  const handleSetPassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const handleLogin = useCallback(() => {
    login(email, password);
  }, [email, password]);

  const handleSignUp = useCallback(() => {
    signup(email, password);
  }, [email, password]);

  const toggleAuthScreen = useCallback(() => {
    if (currentScreen === 'login') {
      setCurrentScreen('signup');
      return; 
    }
    setCurrentScreen('login');
  }, [currentScreen]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image source={image()} style={styles.image} />
      <Text style={styles.title}>{title()}</Text>
      <TextInput
        mode="outline"
        label="Email"
        placeholder="Email"
        autoCapitalize="none"
        autoFocus
        inputMode="email"
        value={email}
        autoCorrect={false}
        onChangeText={handleSetEmail}
        style={styles.input}
      />
      <TextInput
        mode="outline"
        label="Password"
        placeholder="Password"
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
        value={password}
        autoCorrect={false}
        onChangeText={handleSetPassword}
        style={styles.input}
      />

      {loading ? (
        <View style={styles.buttonContainer}>
          <Button style={styles.button} loading={loading}>
            Loading
          </Button>
        </View>
      ) : null}

      {currentScreen === 'login' ? (
        <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.button} onPress={handleLogin}>
            Log in
          </Button>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.button} onPress={handleSignUp}>
            Create an account
          </Button>
        </View>
      )}

      <View style={styles.bottomSection}>
        <Text variant="bodySmall">
          {currentScreen === 'login' ? "Don't have an account?" : 'Already have an account?'}
        </Text>
        <TouchableOpacity onPress={toggleAuthScreen}>
          <Text variant="bodySmall" style={styles.signUpText}>
            {currentScreen === 'login' ? 'Sign Up here' : 'Login here'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '100%',
  },
  image: {
    width: 450,
    height: 400,
    marginVertical: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  signUpText: { color: '#2F80ED', marginLeft: 5 },
});

export default AuthScreen;
