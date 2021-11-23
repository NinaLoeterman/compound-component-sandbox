import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  cloneElement,
} from "react";

const PlayerContext = createContext();

const VideoPlayer = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(false);

  const play = () => {
    setIsPlaying(true);
    player.play();
  };

  const stop = () => {
    setIsPlaying(false);
    player.pause();
  };

  const value = { setPlayer, isPlaying, play, stop };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

const Video = ({ url }) => {
  const { setPlayer } = useContext(PlayerContext);
  const videoRef = useRef();

  useEffect(() => {
    setPlayer(videoRef.current);
  }, [setPlayer]);

  return <video src={url} width={400} ref={videoRef} />;
};

const Play = ({ children }) => {
  const { play } = useContext(PlayerContext);
  return cloneElement(children, { onClick: play });
};

const Stop = ({ children }) => {
  const { stop } = useContext(PlayerContext);
  return cloneElement(children, { onClick: stop });
};

VideoPlayer.Video = Video;
VideoPlayer.Play = Play;
VideoPlayer.Stop = Stop;

export default VideoPlayer;
