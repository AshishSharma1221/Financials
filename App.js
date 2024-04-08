import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from './screens/TransactionsList';
import TransactionDetails from './screens/TransactionDetails';
import Summary from './screens/Summary';
import { TransactionsProvider } from './context/TransactionsContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Transactions List" 
      component={TransactionsList} 
      options={{ headerShown: true }} 
    />
    <Stack.Screen 
      name="Transaction Details" 
      component={TransactionDetails} 
      options={{ headerShown: true }} 
    />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Transactions" 
        component={TransactionsStack} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Summary" 
        component={Summary} 
        options={{
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <Icon name="bar-chart" color={color} size={size} />
          ),
        }}
        initialParams={{ transactions: [] }} // Ensure transactions data is passed as parameter
      />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <TransactionsProvider>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </TransactionsProvider>
  );
}