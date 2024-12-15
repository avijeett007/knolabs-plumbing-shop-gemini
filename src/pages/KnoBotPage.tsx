import React, { useRef, useState } from 'react';
import { LiveAPIProvider } from '../contexts/LiveAPIContext';
import { PlumbingAnalyzer } from '../components/plumbing-analyzer/PlumbingAnalyzer';
import ControlTray from '../components/control-tray/ControlTray';
import './knobot-page.scss';

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
const host = "generativelanguage.googleapis.com";
const url = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

export function KnoBotPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  return (
    <div className="knobot-page">
      <div className="knobot-header">
        <h1>KnoBot - Your AI Plumbing Assistant</h1>
        <p>Show me your plumbing issue, and I'll help you find the perfect solution</p>
      </div>
      <LiveAPIProvider apiKey={API_KEY} url={url}>
        <div className="analyzer-container">
          <PlumbingAnalyzer />
          <ControlTray
            videoRef={videoRef}
            supportsVideo={true}
            onVideoStreamChange={setVideoStream}
          />
        </div>
      </LiveAPIProvider>
    </div>
  );
}
