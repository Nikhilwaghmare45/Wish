import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
  rotation: number;
}

const balloonColors = [
  "#FF6B9D", "#FF85A8", "#FFB6C1", "#E91E8C", "#FF1493",
  "#9B59B6", "#8E44AD", "#FFD700", "#FFA500", "#87CEEB"
];

const confettiColors = [
  "#FF6B9D", "#FFD700", "#87CEEB", "#9B59B6", "#FF8C00",
  "#00CED1", "#FF1493", "#32CD32", "#FF4500", "#1E90FF"
];

export default function BirthdayDecorations() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const newBalloons: Balloon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      size: 30 + Math.random() * 20,
    }));
    setBalloons(newBalloons);

    const newConfetti: Confetti[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * 360,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(10deg);
            opacity: 0;
          }
        }
        
        @keyframes confettiFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }
      `}</style>
      
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.left}%`,
            bottom: "-100px",
            animation: `floatUp ${balloon.duration}s ease-in-out ${balloon.delay}s infinite`,
          }}
        >
          <div
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              backgroundColor: balloon.color,
              borderRadius: "50% 50% 50% 50%",
              position: "relative",
              boxShadow: `inset -5px -5px 15px rgba(0,0,0,0.1), inset 5px 5px 15px rgba(255,255,255,0.3)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "30px",
                backgroundColor: "#999",
              }}
            />
          </div>
        </div>
      ))}
      
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: "10px",
            height: "10px",
            backgroundColor: piece.color,
            animation: `confettiFall ${8 + Math.random() * 4}s linear ${piece.delay}s infinite`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
      
      <div className="absolute top-4 left-4 text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
        <span role="img" aria-label="gift">🎁</span>
      </div>
      <div className="absolute top-8 right-8 text-4xl animate-bounce" style={{ animationDelay: "0.5s" }}>
        <span role="img" aria-label="cake">🎂</span>
      </div>
      <div className="absolute bottom-20 left-8 text-3xl animate-bounce" style={{ animationDelay: "1s" }}>
        <span role="img" aria-label="party">🎉</span>
      </div>
      <div className="absolute bottom-32 right-12 text-3xl animate-bounce" style={{ animationDelay: "1.5s" }}>
        <span role="img" aria-label="flowers">💐</span>
      </div>
      <div className="absolute top-1/3 left-4 text-2xl animate-pulse">
        <span role="img" aria-label="star">⭐</span>
      </div>
      <div className="absolute top-1/2 right-6 text-2xl animate-pulse" style={{ animationDelay: "0.3s" }}>
        <span role="img" aria-label="sparkle">✨</span>
      </div>
    </div>
  );
}
