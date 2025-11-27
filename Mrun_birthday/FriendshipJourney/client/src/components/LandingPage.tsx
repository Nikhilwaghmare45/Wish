import { useState } from "react";
import { Button } from "@/components/ui/button";
import BirthdayDecorations from "./BirthdayDecorations";
import ErrorPopup from "./ErrorPopup";

interface LandingPageProps {
  onCorrectAnswer: () => void;
}

export default function LandingPage({ onCorrectAnswer }: LandingPageProps) {
  const [showError, setShowError] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (option === "nikhil") {
      setShowError(true);
    } else {
      onCorrectAnswer();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 dark:from-pink-950 dark:via-purple-950 dark:to-yellow-950 relative overflow-hidden">
      <BirthdayDecorations />
      
      <div className="relative z-10 text-center p-8 max-w-2xl">
        <div className="mb-8">
          <span className="text-6xl animate-bounce inline-block">🎈</span>
          <span className="text-5xl animate-bounce inline-block" style={{ animationDelay: "0.2s" }}>🎂</span>
          <span className="text-6xl animate-bounce inline-block" style={{ animationDelay: "0.4s" }}>🎁</span>
        </div>
        
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground"
          style={{ fontFamily: "'Pacifico', cursive" }}
          data-testid="text-main-question"
        >
          Before we begin...
        </h1>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-card-border mb-8">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-8 text-foreground"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Answer this very important question:
          </h2>
          
          <p
            className="text-3xl md:text-4xl font-bold mb-10 text-primary"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Who is ALWAYS wrong? 🤔
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => handleOptionClick("nikhil")}
              onMouseEnter={() => setHoveredOption("nikhil")}
              onMouseLeave={() => setHoveredOption(null)}
              className="text-xl px-10 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg transition-all duration-300"
              style={{
                transform: hoveredOption === "nikhil" ? "scale(1.05)" : "scale(1)",
              }}
              data-testid="button-option-nikhil"
            >
              1. Nikhil
            </Button>
            
            <Button
              onClick={() => handleOptionClick("mrunmayaa")}
              onMouseEnter={() => setHoveredOption("mrunmayaa")}
              onMouseLeave={() => setHoveredOption(null)}
              className="text-xl px-10 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg transition-all duration-300"
              style={{
                transform: hoveredOption === "mrunmayaa" ? "scale(1.05)" : "scale(1)",
              }}
              data-testid="button-option-mrunmayaa"
            >
              2. Mrunmayaa
            </Button>
          </div>
        </div>
        
        <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          Choose wisely... 😏
        </p>
      </div>
      
      <ErrorPopup isOpen={showError} onClose={() => setShowError(false)} />
    </div>
  );
}
