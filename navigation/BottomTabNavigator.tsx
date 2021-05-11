import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Routes } from './routes'
import Colors from '../constants/Colors'
import { BottomTabParamList } from '../types'
import useColorScheme from '../hooks/useColorScheme'
import SearchTabNavigator from './SearchTabNavigator'
import { HomeTabNavigator } from './HomeTabNavigator'
import { ComingSoonTabNavigator } from './ComingSoonTabNavigator'
import { DownloadTabNavigator } from './DownloadsTabNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HOMESCREEN}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
        labelStyle: { fontSize: 11 },
      }}>
      <BottomTab.Screen
        name={Routes.HOMESCREEN}
        component={HomeTabNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={22} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.COMMINGSOONSCREEN}
        component={ComingSoonTabNavigator}
        options={{
          tabBarLabel: 'Coming Soon',
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            marginTop: -1,
            marginLeft: 2,
            backgroundColor: '#E74E21',
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='video-library' size={22} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.SEARCHSCREEN}
        component={SearchTabNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' size={22} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.DOWNLOADSSCREEN}
        component={DownloadTabNavigator}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color }) => (
            <AntDesign name='download' size={22} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}
