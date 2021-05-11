import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Movies } from '../../assets/data/movie'
import styled from 'styled-components'
const FIRST_ITEM = Movies.seasons.items[0].episodes.items[0]

const MovieDetails = styled(Text)`
  margin-right: 20px;
  font-weight: bold;
`

export const MovieDetailsScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: FIRST_ITEM.poster }} />
      <Text style={{ color: 'white' }}>Suits</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
        <MovieDetails style={{ color: 'green' }}>2019</MovieDetails>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  poster: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
})
