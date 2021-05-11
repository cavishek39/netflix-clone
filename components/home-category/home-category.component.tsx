import React from 'react'
import { Text, Image, FlatList, StyleSheet } from 'react-native'
import { HomeCategoryComponentProps } from './home-category.component.props'

export const HomeCategoryComponent: React.FunctionComponent<HomeCategoryComponentProps> =
  (props: HomeCategoryComponentProps) => {
    const { category } = props

    return (
      <>
        <Text style={styles.headerTitle}>{category.title}</Text>
        <FlatList
          data={category.movies}
          renderItem={(items) => (
            <Image style={styles.image} source={{ uri: items.item.poster }} />
          )}
          horizontal
        />
      </>
    )
  }

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 120,
    borderRadius: 6,
    marginHorizontal: 5,
    borderColor: 'white',
    resizeMode: 'cover',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
})
