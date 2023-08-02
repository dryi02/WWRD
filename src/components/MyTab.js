import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from './HomeScreen';
import MealPlan from './MealPlan';
import Inventory from './Inventory';

const Tab = createMaterialBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator
      activeColor="#F3D607"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: '#A3A3A3' }}
    >
      <Tab.Screen
        name="Meal Plan"
        component={MealPlan}
        options={{
            tabBarLabel: 'Meal Plan',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={26}/>
            ),
          }}
        />
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
      }}
      />
      <Tab.Screen
      name="Inventory"
      component={Inventory}
      options={{
        tabBarLabel: 'Inventory',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="archive" color={color} size={26}/>
        ),
      }}
      />
    </Tab.Navigator>
  );
}
