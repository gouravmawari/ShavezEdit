import React, { useState } from 'react';
import { Play, Volume2, Settings, Monitor, VolumeX } from 'lucide-react';

const VideoRenderingElement = () => {
  const [isHovered, setIsHovered] = useState(false);
  const codeSnippets = [
    "color_grading: DaVinci_Resolve",
    "timeline: 4K_60fps_ProRes",
    "audio_sync: multicam_edit",
    "motion_graphics: After_Effects",
    "export: H.264_4K_delivery"
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Video Editing Interface */}
      <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-portfolio-yellow/30 overflow-hidden shadow-2xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 bg-black/50 border-b border-portfolio-yellow/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-portfolio-yellow font-mono text-sm">ShavezEdit_Pro.prproj</div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-portfolio-white/60" />
            <Monitor className="w-4 h-4 text-portfolio-white/60" />
          </div>
        </div>

        {/* Preview Window */}
        <div 
          className="relative aspect-video bg-black border-b border-portfolio-yellow/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            src="https://storage.googleapis.com/shavez_portfolio/O%20create_14_10_V1.mp4"
            autoPlay
            muted={!isHovered}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded text-portfolio-yellow font-mono text-sm">
            00:01:23:12
          </div>
          {isHovered && (
            <div className="absolute bottom-4 right-4 text-white">
              {isHovered ? <Volume2 /> : <VolumeX />}
            </div>
          )}
        </div>

        {/* Timeline Area */}
        <div className="p-4 bg-gray-800/50">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-portfolio-white/80 text-sm font-mono">Rendering Progress</span>
              <span className="text-portfolio-yellow text-sm font-mono">100%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-portfolio-yellow to-portfolio-red h-2 rounded-full"
                style={{ width: `100%` }}
              ></div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 bg-portfolio-yellow text-portfolio-black px-4 py-2 rounded-lg hover:bg-portfolio-yellow/90 transition-colors font-semibold"
              >
                <Play className="w-4 h-4" />
                Render
              </button>
              <Volume2 className="w-5 h-5 text-portfolio-white/60" />
            </div>
            <div className="text-portfolio-white/60 font-mono text-sm">
              4K • 60fps • ProRes 422
            </div>
          </div>
        </div>

        {/* Code Terminal */}
        <div className="bg-black/80 p-4 border-t border-portfolio-yellow/20">
          <div className="text-portfolio-green font-mono text-xs mb-2">$ render_pipeline --output 4K</div>
          <div className="space-y-1">
            {codeSnippets.map((snippet, index) => (
              <div
                key={index}
                className="text-portfolio-white/70 font-mono text-xs"
              >
                {'>'} {snippet}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-portfolio-yellow/20 rounded-full animate-float"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-portfolio-red/20 rounded-full animate-bounce"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-yellow/10 via-transparent to-portfolio-red/10 rounded-2xl blur-xl -z-10"></div>
    </div>
  );
};

export default VideoRenderingElement;
