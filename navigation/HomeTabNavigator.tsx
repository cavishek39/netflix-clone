import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home/HomeScreen'
import { HomeParamList } from '../types'

const HomeTabStack = createStackNavigator<HomeParamList>()

export function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeTabStack.Navigator>
  )
}
