// navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator'; // Your Auth stack
import MainNavigator from './MainNavigator'; // Your Tab navigator
import ChatbotStackNavigator from './ChatbotStackNavigator'; // The new stack for Chatbot

const RootStack = createNativeStackNavigator();

function AppNavigator() {
  // You would typically have logic here to determine if the user is authenticated
  // For simplicity, let's assume MainNavigator is the default for authenticated users
  const isAuthenticated = true; // Replace with your actual auth state

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            {/* The MainNavigator (tabs) is the primary screen for authenticated users */}
            <RootStack.Screen name="MainTabs" component={MainNavigator} />
            {/* When navigating to 'ChatbotStack', it will be pushed on top of the tabs,
                and the bottom bar will be hidden. */}
            <RootStack.Screen name="ChatbotStack" component={ChatbotStackNavigator} />
            {/* You might also have other screens that hide the tab bar, like settings or detail screens */}
          </>
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;