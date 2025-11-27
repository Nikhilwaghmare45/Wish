import { useState } from "react";
import BirthdayDecorations from "./BirthdayDecorations";
import StageCard from "./StageCard";
import FinalStage from "./FinalStage";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

import img1 from "@assets/img1_1764219443808.jpeg";
import img2 from "@assets/img2_1764219443808.jpeg";
import img3 from "@assets/img3_1764219443808.jpeg";
import img4 from "@assets/img4_1764219443808.jpeg";
import img5 from "@assets/img5_1764222694788.jpeg";
import img6 from "@assets/img6_1764222694789.jpeg";
import img7 from "@assets/img7_1764222694789.jpeg";
import img9 from "@assets/img9_1764222694789.jpeg";
import img10 from "@assets/img10_1764222694789.jpeg";
import img11 from "@assets/img11_1764222694790.jpeg";
import img12 from "@assets/img12_1764222694790.jpeg";

interface Stage {
  id: number;
  image: string;
  text: string;
  isFinal?: boolean;
}

const stages: Stage[] = [
  {
    id: 1,
    image: img1,
    text: "Here We go, It Was me Who Texted you for the First time 😌. Scale na mazi hoti na tuzi hoti but maybe apla bolna exchange whyla pahije mhun cha tinni janma ghetla asava 😂....",
  },
  {
    id: 2,
    image: img2,
    text: "Idk why ? 🤣 why was i even asking about your snapchat id on the very Next day 😅 And you Don't Even use Snapchat. Hope so We will be friends on that platform too 😗.",
  },
  {
    id: 3,
    image: img3,
    text: "This was the very first Sticker used in a conversation And It was A Cat 🐈, From The First sticker as a cat to Endless Cat reels seems like came a long way.. 😂",
  },
  {
    id: 4,
    image: img4,
    text: "It was your birthday And how lucky you were that you received a Birthday Wish From My end That too this early in your life 😮. Must be an Achievement for you 😛.",
  },
  {
    id: 5,
    image: img5,
    text: "Who says that friends can't grow together, here is the proof Making Our own Universe That too with personal properties 😮‍💨..",
  },
  {
    id: 6,
    image: img6,
    text: "Idk what is it even called as 😂 But Yes, We are Part Of it too... 😆",
  },
  {
    id: 7,
    image: img7,
    text: "Birthday 2023, I must Be A Heavy Photo Editor 😃. The Wish From Cultural Heritage Of India 'Sanskrit'....",
  },
  {
    id: 8,
    image: img9,
    text: "This type of fruitful conversations must be there, from emoji's to text, called as Maturity 🤭..",
  },
  {
    id: 9,
    image: img10,
    text: "Oo Birthday 2024 : Who said that nicknames are short 😅, here we came with a longer one 'Mrunmayaa'... ✨",
  },
  {
    id: 10,
    image: img11,
    text: "One Of The Best Compliment Ever Received..🔥 Thank You..",
  },
  {
    id: 11,
    image: img12,
    text: `We Are Already In 2025 😲...

Wishing you a very Happy Birthday Mrunmayaaaa 🎂 🎉 🎈 🎁 . May Lord Khandoba Bless you with Offers Letters and Many more. Keep Pushing Hard. Many Good Wishes To You.. ✨️💫

🎉 "생일 축하해, 미룬마야! 오늘 하루가 행복으로 가득하고, 네 모든 꿈이 이루어지길 바랄게." 🎉`,
    isFinal: true,
  },
];

interface MemoryJourneyProps {
  onGoHome: () => void;
}

export default function MemoryJourney({ onGoHome }: MemoryJourneyProps) {
  const [currentStage, setCurrentStage] = useState(1);
  const [unlockedStages, setUnlockedStages] = useState<number[]>([1]);

  const handleNext = () => {
    if (currentStage < stages.length) {
      const nextStage = currentStage + 1;
      setCurrentStage(nextStage);
      if (!unlockedStages.includes(nextStage)) {
        setUnlockedStages([...unlockedStages, nextStage]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  const currentStageData = stages.find((s) => s.id === currentStage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 dark:from-pink-950 dark:via-purple-950 dark:to-yellow-950 relative">
      <BirthdayDecorations />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={onGoHome}
            className="absolute left-4 top-4 md:left-8 md:top-8"
            data-testid="button-home"
          >
            <Home className="w-5 h-5 mr-2" />
            Start Over
          </Button>
          
          <div className="mb-4">
            <span className="text-5xl">🎂</span>
          </div>
          
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-2"
            style={{ fontFamily: "'Pacifico', cursive" }}
            data-testid="text-birthday-title"
          >
            Happy Birthday Mrunmayaa!
          </h1>
          
          <p
            className="text-xl text-muted-foreground"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.5rem" }}
          >
            A journey through our friendship memories ✨
          </p>
        </header>
        
        <div className="mb-8">
          <div className="relative max-w-4xl mx-auto px-8">
            <div className="absolute top-1/2 left-8 right-8 h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 rounded-full transform -translate-y-1/2 z-0" />
            
            <div className="absolute top-1/2 left-8 h-2 bg-gradient-to-r from-primary to-pink-400 rounded-full transform -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((Math.max(...unlockedStages) - 1) / (stages.length - 1)) * 100}%` }}
            />
            
            <div className="relative flex justify-between items-center">
              {stages.map((stage) => {
                const isUnlocked = unlockedStages.includes(stage.id);
                const isCurrent = currentStage === stage.id;
                const isCompleted = unlockedStages.includes(stage.id) && stage.id < currentStage;
                const isFinal = stage.isFinal;
                
                return (
                  <div key={stage.id} className="relative flex flex-col items-center">
                    <button
                      onClick={() => isUnlocked && setCurrentStage(stage.id)}
                      disabled={!isUnlocked}
                      className={`
                        relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center
                        font-bold text-sm md:text-base transition-all duration-300 border-4
                        ${isFinal && isCurrent
                          ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white scale-125 shadow-2xl border-yellow-300 animate-pulse"
                          : isCurrent
                            ? "bg-gradient-to-r from-primary to-pink-400 text-white scale-110 shadow-lg border-white ring-4 ring-primary/30"
                            : isCompleted
                              ? "bg-green-500 text-white border-green-300 shadow-md"
                              : isUnlocked
                                ? "bg-white text-primary border-primary/30 shadow-md"
                                : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                        }
                      `}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid={`button-stage-${stage.id}`}
                    >
                      {isCompleted ? (
                        <span className="text-lg">✓</span>
                      ) : isFinal ? (
                        <span className="text-lg">🎁</span>
                      ) : !isUnlocked ? (
                        <span className="text-lg">🔒</span>
                      ) : (
                        stage.id
                      )}
                    </button>
                    
                    {isCurrent && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <span className="text-2xl animate-bounce inline-block">👆</span>
                      </div>
                    )}
                    
                    {isFinal && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <span className="text-xl animate-pulse">🌟</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-between mt-12 text-xs text-muted-foreground" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              <span>Start</span>
              <span>🎯 The Journey</span>
              <span>🎊 Finale!</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {currentStageData && (
            currentStageData.isFinal ? (
              <FinalStage
                stageNumber={currentStageData.id}
                totalStages={stages.length}
                imageSrc={currentStageData.image}
                text={currentStageData.text}
                onPrevious={handlePrevious}
                hasPrevious={currentStage > 1}
              />
            ) : (
              <StageCard
                stageNumber={currentStageData.id}
                totalStages={stages.length}
                imageSrc={currentStageData.image}
                text={currentStageData.text}
                isUnlocked={unlockedStages.includes(currentStageData.id)}
                isActive={true}
                onNext={handleNext}
                onPrevious={handlePrevious}
                hasNext={currentStage < stages.length}
                hasPrevious={currentStage > 1}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
