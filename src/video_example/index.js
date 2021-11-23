import VideoPlayer from "./components/VideoPlayer";
import movie from "./components/video.mp4";

function VideoExample() {
  return (
    <div>
      <VideoPlayer>
        <VideoPlayer.Video url={movie} />

        <VideoPlayer.Play>
          <div>start</div>
        </VideoPlayer.Play>

        <VideoPlayer.Stop>
          <div>stop</div>
        </VideoPlayer.Stop>
        
      </VideoPlayer>
    </div>
  );
}

export default VideoExample;
