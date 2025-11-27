import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface ErrorPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ErrorPopup({ isOpen, onClose }: ErrorPopupProps) {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-10px) rotate(-2deg); }
          20% { transform: translateX(10px) rotate(2deg); }
          30% { transform: translateX(-10px) rotate(-2deg); }
          40% { transform: translateX(10px) rotate(2deg); }
          50% { transform: translateX(-10px) rotate(-2deg); }
          60% { transform: translateX(10px) rotate(2deg); }
          70% { transform: translateX(-10px) rotate(-2deg); }
          80% { transform: translateX(10px) rotate(2deg); }
          90% { transform: translateX(-10px) rotate(-2deg); }
        }
        
        @keyframes glitch {
          0% { text-shadow: 2px 2px #ff0000, -2px -2px #00ff00; }
          25% { text-shadow: -2px 2px #ff0000, 2px -2px #00ff00; }
          50% { text-shadow: 2px -2px #ff0000, -2px 2px #00ff00; }
          75% { text-shadow: -2px -2px #ff0000, 2px 2px #00ff00; }
          100% { text-shadow: 2px 2px #ff0000, -2px -2px #00ff00; }
        }
        
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 0, 0, 0.8); }
        }
      `}</style>
      
      <div
        className={`bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 max-w-md w-full text-center border-4 border-red-400 ${shake ? "animate-shake" : ""}`}
        style={{
          animation: shake ? "shake 0.5s ease-in-out, pulse-red 1s infinite" : "pulse-red 1s infinite",
        }}
        data-testid="error-popup"
      >
        <div className="mb-4">
          <span className="text-6xl" role="img" aria-label="error">🚨</span>
        </div>
        
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            animation: "glitch 0.3s infinite",
          }}
        >
          ERROR ERROR
        </h2>
        
        <p className="text-xl text-white mb-6" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          How Can You Even Select That??
        </p>
        
        <div className="flex justify-center gap-2 mb-4">
          <span className="text-4xl">😤</span>
          <span className="text-4xl">🙄</span>
          <span className="text-4xl">😡</span>
        </div>
        
        <p className="text-white/80 text-sm mb-6 italic">
          Think again... there's only one correct answer here!
        </p>
        
        <Button
          onClick={onClose}
          className="bg-white text-red-600 font-bold px-8 py-3 text-lg"
          data-testid="button-try-again"
        >
          Okay okay, let me try again 😅
        </Button>
      </div>
    </div>
  );
}
