import React, { useState, useRef } from 'react';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  return (
    <div>
      <h3>Now Playing: {song ? `${song.title} - ${song.artist}` : 'No song selected'}</h3>
      {song && (
        <div>
          <audio
            ref={audioRef}
            src={song.url}
            onTimeUpdate={handleTimeUpdate}
          ></audio>
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            min="0"
            max={audioRef.current ? audioRef.current.duration : 0}
            value={currentTime}
            onChange={handleSeek}
          />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
