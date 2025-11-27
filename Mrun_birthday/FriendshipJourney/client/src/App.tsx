import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/components/LandingPage";
import MemoryJourney from "@/components/MemoryJourney";

type AppState = "quiz" | "journey";

function App() {
  const [appState, setAppState] = useState<AppState>("quiz");

  const handleCorrectAnswer = () => {
    setAppState("journey");
  };

  const handleGoHome = () => {
    setAppState("quiz");
  };

  return (
    <TooltipProvider>
      <Toaster />
      {appState === "quiz" ? (
        <LandingPage onCorrectAnswer={handleCorrectAnswer} />
      ) : (
        <MemoryJourney onGoHome={handleGoHome} />
      )}
    </TooltipProvider>
  );
}

export default App;
