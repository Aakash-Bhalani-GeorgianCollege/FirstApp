import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import * as Font from 'expo-font';
import Onboarding from './Onboarding';

const LoginScreen = ({ 
     navigation
 }) => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Noto-Sans': require('../../assets/Noto_Sans/NotoSans-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();

    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const handleLogin = () => {

    const dummyEmail = 'test';
    const dummyPassword = 'test';

    if (email === dummyEmail && password === dummyPassword) {
       navigation.navigate("Home")
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (showSplash) {
    // Show the splash screen while loading fonts and assets
    return <Onboarding />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/login.png')} 
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => alert("Sign up button pressed!")}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#EDBD11',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;