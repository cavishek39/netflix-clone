import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SearchScreen from '../screens/search/SearchScreen'
import { SearchParamList } from '../types'

const SearchTabStack = createStackNavigator<SearchParamList>()

export default function SearchTabNavigator() {
  return (
    <SearchTabStack.Navigator>
      <SearchTabStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerTitle: 'Search Title' }}
      />
    </SearchTabStack.Navigator>
  )
}
