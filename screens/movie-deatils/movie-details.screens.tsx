import {Picker} from '@react-native-picker/picker'
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import React, {useState} from 'react'
import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import {Movies} from '../../assets/data/movie'
import styled from 'styled-components'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {EpisodesListComponent} from '../../components'
import {VideoPlayerComponent} from '../../components/VideoPlayer/video-player.component'
import {SafeAreaView} from 'react-native-safe-area-context'

const EPISODES = Movies.seasons.items[0]

const FIRST_ITEM = Movies.seasons.items[0].episodes.items[0]
/*
 * Extracting the session names from the session array
 */
const SESSION_NAMES = Movies.seasons.items.map((session) => session.name)

export const MovieDetailsScreen: React.FunctionComponent = () => {
  const [currentSession, setCurrentSession] = useState(EPISODES)
  const [currentEpisode, setCurrentEpisode] = useState(
    EPISODES.episodes.items[0],
  )

  return (
    <View>
      <VideoPlayerComponent video={currentEpisode} />
      <FlatList
        data={currentSession?.episodes?.items}
        renderItem={({item}) => (
          <EpisodesListComponent episodes={item} onPress={setCurrentEpisode} />
        )}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.title}>{Movies.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 5,
                alignItems: 'center',
              }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.movieYear}>{Movies.year}</Text>
              <View style={styles.ageRestriction}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>12+</Text>
              </View>
              <Text style={styles.movieYear}>
                {Movies.numberOfSeasons} Seasons
              </Text>
              <View style={{marginHorizontal: 10}}>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
            </View>
            <View style={{paddingHorizontal: 5}}>
              <PlayButton onPress={() => {}}>
                <FontAwesome name="play" size={14} color="black" />
                <Text style={{fontWeight: 'bold', paddingHorizontal: 10}}>
                  Play
                </Text>
              </PlayButton>
              <DownloadButton onPress={() => {}}>
                <AntDesign name="download" size={15} color="white" />
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    color: 'white',
                  }}>
                  Download
                </Text>
              </DownloadButton>
              <Text style={styles.plotText}>{Movies.plot}</Text>
              <Text style={styles.castText}>Cast: {Movies.cast}</Text>
              <Text style={styles.creatorText}>Creator: {Movies.creator}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View
                style={{
                  marginHorizontal: 25,
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <AntDesign name="plus" size={20} color="white" />
                <Text style={{color: 'gray', fontSize: 11}}>My List</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 25,
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <SimpleLineIcons name="like" size={20} color="white" />
                <Text style={{color: 'gray', fontSize: 11}}>Like</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 25,
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <FontAwesome name="send-o" size={20} color="white" />
                <Text style={{color: 'gray', fontSize: 11}}>Share</Text>
              </View>
            </View>
            <Picker
              style={{color: 'white', width: 130}}
              dropdownIconColor={'white'}
              selectedValue={currentSession.name}
              onValueChange={(itemValue: string, itemIndex: number) => {
                setCurrentSession(Movies.seasons.items[itemIndex])
              }}>
              {SESSION_NAMES.map((name) => (
                <Picker.Item label={name} value={name} />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  )
}

const PlayButton = styled(TouchableOpacity)`
  margin-top: 10px;
  height: 30px;
  background-color: #ebedef;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
`

const DownloadButton = styled(TouchableOpacity)`
  margin-top: 10px;
  height: 30px;
  background-color: #2e4053;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
`
const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    paddingTop: 8,
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  poster: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  match: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 20,
  },
  movieYear: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ageRestriction: {
    marginHorizontal: 10,
    height: 20,
    width: 30,
    borderRadius: 4,
    backgroundColor: '#F9CF12',
    alignItems: 'center',
  },
  plotText: {
    marginTop: 10,
    color: 'white',
  },
  castText: {
    marginTop: 5,
    color: 'gray',
    fontSize: 12,
  },
  creatorText: {
    color: 'gray',
    fontSize: 12,
  },
})
