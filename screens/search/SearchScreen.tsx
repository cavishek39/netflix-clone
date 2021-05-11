import * as React from 'react'
import { Text, View } from '../../components/Themed'
import { styles } from './styles'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      {/* <EditScreenInfo path='/screens/TabTwoScreen.tsx' /> */}
    </View>
  )
}
