import React, { useState, useEffect } from 'react';
import { 
  FiPlay, 
  FiPause, 
  FiSkipBack, 
  FiSkipForward, 
  FiVolume2, 
  FiVolumeX, 
  FiMusic 
} from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa';

const tracks = [
  {
    title: 'Starboy',
    artist: 'The Weeknd, Daft Punk',
    duration: 230,
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&auto=format&fit=crop&q=80',
  },
  {
    title: 'Nightcall',
    artist: 'Kavinsky',
    duration: 259,
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=120&auto=format&fit=crop&q=80',
  },
  {
    title: 'Resonance',
    artist: 'HOME',
    duration: 212,
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80',
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(42); // percentage
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  // Simulated playback time advancement
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const currentTimeSecs = (progress / 100) * currentTrack.duration;

  return (
    <div className="music-player-container font-mono">
      <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
        <FaSpotify className="text-spotify text-sm animate-pulse" />
        <span className="font-semibold tracking-wide">LISTENING TO SPOTIFY</span>
        <span className="inline-block w-2 h-2 rounded-full bg-spotify animate-ping"></span>
      </div>

      <div className="w-[300px] sm:w-[320px] bg-[#121218]/95 backdrop-blur-md border border-white/10 hover:border-spotify/60 rounded-2xl p-4 shadow-xl hover:shadow-spotify/10 transition-all duration-300">
        {/* Top Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md flex-shrink-0 border border-white/10">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
            {/* Equalizer overlay on image */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="flex items-end gap-[2px] h-4">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`w-[3px] bg-spotify rounded-full transition-all duration-300 ${
                      isPlaying ? 'animate-bounce' : 'h-1'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.sin(bar * 1.5) * 8 + 12}px` : '4px',
                      animationDelay: `${bar * 0.15}s`,
                      animationDuration: '0.8s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-semibold truncate hover:text-spotify transition-colors">
              {currentTrack.title}
            </h4>
            <p className="text-slate-400 text-xs truncate">
              {currentTrack.artist}
            </p>
          </div>

          {/* Equalizer bars outside */}
          <div className="flex items-end gap-[2.5px] h-5 px-1">
            {[20, 45, 80, 50, 95].map((h, i) => (
              <span
                key={i}
                className="w-[2.5px] bg-spotify rounded-full transition-all duration-200"
                style={{
                  height: isPlaying ? `${h}%` : '20%',
                  opacity: isPlaying ? 1 : 0.4,
                  animation: isPlaying ? `playing 1s ease-in-out infinite ${i * 0.15}s` : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Scrubber Progress Bar */}
        <div className="mt-3">
          <div 
            className="w-full h-1.5 bg-white/10 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.max(0, Math.min(100, (clickX / rect.width) * 100)));
            }}
          >
            <div
              className="h-full bg-spotify rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>{formatTime(currentTimeSecs)}</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? <FiVolumeX className="w-3.5 h-3.5" /> : <FiVolume2 className="w-3.5 h-3.5" />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-14 h-1 accent-spotify bg-white/10 rounded-full cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <FiSkipBack className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-spotify text-black flex items-center justify-center hover:scale-105 transition-all shadow-md shadow-spotify/20"
            >
              {isPlaying ? <FiPause className="w-4 h-4 fill-black" /> : <FiPlay className="w-4 h-4 fill-black ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <FiSkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
