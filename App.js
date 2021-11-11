import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComponent from './Intents/LoginComponent';
import RegisterComponent from './Intents/RegisterComponent';
import Home from './Intents/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="RegisterComponent"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="RegisterComponent" 
        component={RegisterComponent} 
        options={{ title: 'RegisterComponent' }}
      />       
      <Stack.Screen 
        name="LoginComponent" 
        component={LoginComponent} 
        options={
          {title: 'LoginComponent'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}