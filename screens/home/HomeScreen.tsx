import * as React from 'react'
import Categories from '../../assets/data/categories'
import { HomeCategoryComponent } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { styles } from '.'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={Categories.items}
            renderItem={(items) => (
              <HomeCategoryComponent category={items.item} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
