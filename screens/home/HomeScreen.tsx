import * as React from 'react'
import {View, FlatList, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './styles'
import Categories from '../../assets/data/categories'
import {HomeCategoryComponent} from '../../components'

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
