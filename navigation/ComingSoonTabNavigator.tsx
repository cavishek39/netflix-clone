import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ComingSoonParamList } from '../types'
import ComingSoonScreen from '../screens/ComingSoonScreen'

const ComingSoonTab = createStackNavigator<ComingSoonParamList>()

export function ComingSoonTabNavigator() {
  return (
    <ComingSoonTab.Navigator>
      <ComingSoonTab.Screen
        name='ComingSoonScreen'
        component={ComingSoonScreen}
        options={{ headerTitle: 'Coming Soon' }}
      />
    </ComingSoonTab.Navigator>
  )
}
