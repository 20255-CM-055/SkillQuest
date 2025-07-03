import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {isLoggedIn ? (
        <MainNavigator username={username} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <AuthNavigator setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
      )}
    </NavigationContainer>
  );
}
