'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { IMAGES } from '@/constants/assets';

export default function BannerVideo() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[var(--background-darker)]">
      <video
        autoPlay
        playsInline
        muted
        // loop
        preload="auto"
        poster={IMAGES.xefroMirrorVideoThumb}
        className="w-full h-auto"
        style={{ objectFit: 'contain' }}
        controlsList="nodownload nofullscreen noremoteplayback" 
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
      >
        <source 
          src={IMAGES.appShowCaseMP4} 
          type="video/mp4"
        />
        Your browser does not support the video Playback.
      </video>
    </div>
  );
} 