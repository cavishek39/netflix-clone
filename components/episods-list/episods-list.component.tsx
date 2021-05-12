import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import {Image, StyleSheet, Text, View} from 'react-native'
import {EpisodesListComponentProps} from './episods-list.component.props'

export const EpisodesListComponent: React.FunctionComponent<EpisodesListComponentProps> =
    (props: EpisodesListComponentProps) => {
        const {episodes} = props

        return (
            <View
                style={{
                    flex: 1,
                    padding: 5,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 5
                            }}>
                            <Image source={{uri: episodes?.poster}} style={styles.poster}/>
                        </View>
                        <View
                            style={{
                                paddingLeft: 4,
                                flexDirection: 'column',
                            }}>
                            <Text style={styles.episodesTitle}>{episodes?.title}</Text>
                            <Text style={styles.duration}>{episodes?.duration}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingRight: 5,
                        }}>
                        <AntDesign name="download" size={20} color="white"/>
                    </View>
                </View>
                <Text style={styles.plotText}>{episodes?.plot}</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    poster: {
        height: 110,
        width: 180,
    },
    episodesTitle: {
        fontWeight: 'bold',
        fontSize: 11,
        color: 'white',
    },
    duration: {
        fontWeight: '600',
        fontSize: 11,
        color: 'gray',
    },
    plotText: {
        marginTop: 10,
        color: 'white',
        fontSize: 13,
        paddingHorizontal: 5,
    },
})
