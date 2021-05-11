import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DownloadsScreen from '../screens/DownloadsScreen'
import { DownloadsParamList } from '../types'

const DownloadStack = createStackNavigator<DownloadsParamList>()

export function DownloadTabNavigator() {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name='DownloadsScreen'
        component={DownloadsScreen}
        options={{ headerTitle: 'Downloads' }}
      />
    </DownloadStack.Navigator>
  )
}
