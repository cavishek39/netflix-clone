import {Episode} from '../../types'

export interface EpisodesListComponentProps {
  episodes: Episode
  onPress: (episode: Episode) => any
}
