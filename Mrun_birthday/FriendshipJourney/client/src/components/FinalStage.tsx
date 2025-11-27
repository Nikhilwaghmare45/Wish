import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface FinalStageProps {
  stageNumber: number;
  totalStages: number;
  imageSrc: string;
  text: string;
  onPrevious: () => void;
  hasPrevious: boolean;
}

export default function FinalStage({
  stageNumber,
  totalStages,
  imageSrc,
  text,
  onPrevious,
  hasPrevious,
}: FinalStageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="relative">
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 182, 193, 0.5), 0 0 40px rgba(255, 182, 193, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 182, 193, 0.8), 0 0 60px rgba(255, 182, 193, 0.5); }
        }
        
        .rainbow-border {
          background: linear-gradient(90deg, #ff6b9d, #ffd700, #87ceeb, #9b59b6, #ff6b9d);
          background-size: 200% 200%;
          animation: rainbow 3s ease infinite;
        }
      `}</style>
      
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: `fall ${3 + Math.random() * 2}s linear ${Math.random() * 2}s infinite`,
              }}
            >
              {["🎉", "🎊", "✨", "🌟", "💫", "🎈", "🎁", "💖"][Math.floor(Math.random() * 8)]}
            </div>
          ))}
          <style>{`
            @keyframes fall {
              0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
              100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
            }
          `}</style>
        </div>
      )}
      
      <Card 
        className="p-6 md:p-10 border-4 relative overflow-visible"
        style={{
          background: "linear-gradient(135deg, rgba(255,182,193,0.3) 0%, rgba(255,218,185,0.3) 25%, rgba(255,255,224,0.3) 50%, rgba(176,224,230,0.3) 75%, rgba(221,160,221,0.3) 100%)",
          animation: "glow 2s ease-in-out infinite",
        }}
        data-testid={`card-stage-${stageNumber}`}
      >
        <div className="absolute -top-4 -left-4 text-4xl animate-bounce">🎈</div>
        <div className="absolute -top-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>🎉</div>
        <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>🎁</div>
        <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: "0.6s" }}>💐</div>
        <div className="absolute top-1/2 -left-6 text-3xl" style={{ animation: "float 2s ease-in-out infinite" }}>⭐</div>
        <div className="absolute top-1/2 -right-6 text-3xl" style={{ animation: "float 2s ease-in-out infinite", animationDelay: "1s" }}>✨</div>
        
        <div className="text-center mb-6">
          <div className="inline-block rainbow-border p-1 rounded-full mb-4">
            <div className="bg-card px-8 py-3 rounded-full">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                🌟 The Grand Finale! 🌟
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rainbow-border rounded-lg blur-sm" />
            <img
              src={imageSrc}
              alt={`Memory ${stageNumber}`}
              className="relative max-w-full w-auto max-h-[400px] rounded-lg shadow-2xl border-4 border-white"
              style={{ animation: "glow 3s ease-in-out infinite" }}
              data-testid={`img-stage-${stageNumber}`}
            />
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl" style={{ animation: "sparkle 1s ease-in-out infinite" }}>👑</div>
          </div>
        </div>
        
        <div className="text-center mb-8 space-y-4">
          {text.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${index === 0 ? 'text-2xl font-bold text-primary' : 'text-lg text-foreground'}`}
              style={{ fontFamily: index === 0 ? "'Pacifico', cursive" : "'Dancing Script', cursive", fontSize: index === 0 ? "1.8rem" : "1.4rem" }}
              data-testid={`text-stage-${stageNumber}-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-4xl" style={{ animation: "float 1.5s ease-in-out infinite" }}>🎂</span>
          <span className="text-4xl" style={{ animation: "float 1.5s ease-in-out infinite", animationDelay: "0.3s" }}>🎉</span>
          <span className="text-4xl" style={{ animation: "float 1.5s ease-in-out infinite", animationDelay: "0.6s" }}>🎈</span>
          <span className="text-4xl" style={{ animation: "float 1.5s ease-in-out infinite", animationDelay: "0.9s" }}>🎁</span>
          <span className="text-4xl" style={{ animation: "float 1.5s ease-in-out infinite", animationDelay: "1.2s" }}>💖</span>
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={onPrevious}
            disabled={!hasPrevious}
            variant="outline"
            className="flex items-center gap-2 px-6 py-3"
            data-testid="button-previous"
          >
            <ChevronLeft className="w-5 h-5" />
            Revisit Memories
          </Button>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            🎊 You've reached the end of this beautiful journey! 🎊
          </p>
        </div>
      </Card>
    </div>
  );
}
