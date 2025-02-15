/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from "../ui/Button";
import Image from "next/image";
import { IMAGES } from '@/constants/assets';
import { useAppDownload } from '@/hooks/useAppDownload';
import { DownloadButton } from "../download/DownloadButton";
import { cn } from "@/lib/utils";
import React from 'react';

export default function Banner() {
  const { mutate: downloadApp, isPending } = useAppDownload();
  
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      {/* Changed to flex container with padding */}
      <div className="flex justify-center items-center px-4 lg:px-12">
        <div className="relative w-full max-w-[1920px]">
          {/* Gradient background effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--gradient-start)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-0 right-4 w-72 h-72 bg-[var(--gradient-end)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-75"></div>
          </div>

          {/* Main content container - Adjusted padding and alignment */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24">
            {/* Text content - Left side with expanded width */}
            <div className="relative z-20 lg:w-[640px] shrink-0 lg:pt-12 pl-4 lg:pl-12">
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                  <h1 className="text-6xl lg:text-7xl font-bold">
                    Mirror Your Phone
                  </h1>
                  <span className="gradient-text text-6xl lg:text-7xl font-bold mt-3">
                    To Your PC
                  </span>
                </div>

                <p className="text-xl lg:text-2xl text-[var(--text-secondary)] max-w-[560px] leading-relaxed">
                  Experience seamless screen mirroring with high quality and advanced device control. 
                  Monitor your phone&apos;s vital stats directly from your desktop.
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <DownloadButton />
                
               
               
              
                </div>
              </div>
            </div>

            {/* App Showcase - Right side with adjusted width */}
            <div className="relative flex-1 min-w-0 lg:max-w-[1100px] pr-4 lg:pr-12">
              <div className={cn(
                "floating-card relative",
                "w-full",
                "transform hover:scale-102 transition-transform duration-500",
                "lg:translate-y-6"
              )}>
                {/* App Demo Video */}
                <div className="relative rounded-xl overflow-hidden bg-[var(--background-darker)]">
                  <video
                     autoPlay
                    // loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="w-full h-auto"
                  >
                    <source 
                      src={IMAGES.appShowCaseMP4} 
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Optional: Subtle shadow for depth */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-xl shadow-xl" 
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.12) 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adjusted spacing for content below */}
      <div className="relative z-20 mt-24">
        {/* Next section content */}
      </div>
    </section>
  );
} 