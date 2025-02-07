'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '@/constants/assets';
import { Play } from 'lucide-react';
import React from 'react';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

function VideoModal({ videoId, onClose }: VideoModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}

export function DemoSection() {
  const [showVideo, setShowVideo] = React.useState(false);
  const videoId = "oSRblPtEHE0"; // Replace with your video ID

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            See It In Action
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Watch how Xefro Mirror transforms your device management experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Preview GIF/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden
                     group cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src={IMAGES.mockupPhone}
              alt="Feature Preview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-20"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm
                           flex items-center justify-center
                           border border-white/50">
                <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">Real-time Mirroring</h3>
              <p className="text-[var(--text-secondary)]">
                Experience seamless screen mirroring with minimal latency and crystal-clear quality.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">Advanced Controls</h3>
              <p className="text-[var(--text-secondary)]">
                Take full control of your device with intuitive management tools and real-time monitoring.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">Secure Connection</h3>
              <p className="text-[var(--text-secondary)]">
                Your data security is our priority with end-to-end encryption and secure file transfers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <VideoModal 
          videoId={videoId} 
          onClose={() => setShowVideo(false)} 
        />
      )}
    </section>
  );
} 