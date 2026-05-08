'use client';

import { useState } from 'react';
import useSound from 'use-sound';

export function useEngineSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [startEngine, { stop }] = useSound('/911-sound.mp3', {
    volume: 0.3,
  });

  const handleEngine = () => {
    if (isPlaying) {
      stop();
    } else {
      startEngine();
    }

    setIsPlaying(!isPlaying);
  };

  return { handleEngine };
}
