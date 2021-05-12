import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Text, Image, FlatList, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {HomeCategoryComponentProps} from './home-category.component.props'

export const HomeCategoryComponent: React.FunctionComponent<HomeCategoryComponentProps> =
  (props: HomeCategoryComponentProps) => {
    const {category} = props
    const navigation = useNavigation()

    const onPressMovieCard = (item: any) => {
      navigation.navigate('MovieDetailsScreen', {id: item.id})
    }
    return (
      <>
        <Text style={styles.headerTitle}>{category.title}</Text>
        <FlatList
          data={category.movies}
          renderItem={(items) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onPressMovieCard(items)}>
              <Image style={styles.image} source={{uri: items.item.poster}} />
            </TouchableOpacity>
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
