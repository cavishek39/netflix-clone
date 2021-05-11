import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
} from '@react-navigation/stack'
import React from 'react'
import { HomeParamList } from '../types'
import HomeScreen from '../screens/home/HomeScreen'
import { MovieDetailsScreen } from '../screens/movie-deatils'

const HomeTabStack = createStackNavigator<HomeParamList>()

export function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator initialRouteName='MovieDetailsScreen'>
      <HomeTabStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeTabStack.Screen
        name='MovieDetailsScreen'
        component={MovieDetailsScreen}
        options={{}}
      />
    </HomeTabStack.Navigator>
  )
}
