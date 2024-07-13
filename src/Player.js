import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { videos } from './data/videos'

const Player = () => {
  const { id } = useParams()
  const index = videos.findIndex(v => v.id == id)
  const video = videos[index]
  console.log(id, video)

  return (
    <div>
      <ReactPlayer url={video.url} controls={true} />
    </div>
  )
}

export default Player
