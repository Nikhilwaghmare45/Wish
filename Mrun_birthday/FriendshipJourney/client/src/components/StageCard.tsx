import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";

interface StageCardProps {
  stageNumber: number;
  totalStages: number;
  imageSrc: string;
  text: string;
  isUnlocked: boolean;
  isActive: boolean;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function StageCard({
  stageNumber,
  totalStages,
  imageSrc,
  text,
  isUnlocked,
  isActive,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: StageCardProps) {
  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-2 border-dashed border-muted-foreground/30">
        <div className="flex flex-col items-center gap-4">
          <Lock className="w-16 h-16 text-muted-foreground/50" />
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Stage {stageNumber} is locked
          </p>
          <p className="text-sm text-muted-foreground/70">
            Complete the previous stage to unlock!
          </p>
        </div>
      </Card>
    );
  }

  if (!isActive) return null;

  return (
    <Card 
      className="p-6 md:p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl relative overflow-visible"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute -top-3 -left-3 text-3xl">🎈</div>
      <div className="absolute -top-3 -right-3 text-3xl">🎉</div>
      <div className="absolute -bottom-3 -left-3 text-2xl">🎁</div>
      <div className="absolute -bottom-3 -right-3 text-2xl">💐</div>
      
      <div className="text-center mb-6">
        <span
          className="inline-block bg-gradient-to-r from-primary to-pink-400 text-white px-6 py-2 rounded-full text-lg font-semibold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Memory {stageNumber} of {totalStages}
        </span>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src={imageSrc}
            alt={`Memory ${stageNumber}`}
            className="max-w-full w-auto max-h-[400px] rounded-lg shadow-lg border-4 border-white dark:border-gray-700"
            data-testid={`img-stage-${stageNumber}`}
          />
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce">📸</div>
        </div>
      </div>
      
      <p
        className="text-lg md:text-xl text-center text-foreground mb-8 leading-relaxed"
        style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.4rem" }}
        data-testid={`text-stage-${stageNumber}`}
      >
        {text}
      </p>
      
      <div className="flex justify-between items-center gap-4">
        <Button
          onClick={onPrevious}
          disabled={!hasPrevious}
          variant="outline"
          className="flex items-center gap-2 px-6 py-3"
          data-testid="button-previous"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </Button>
        
        <div className="flex gap-1">
          {Array.from({ length: totalStages }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i + 1 === stageNumber
                  ? "bg-primary w-4"
                  : i + 1 <= stageNumber
                    ? "bg-primary/50"
                    : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        
        <Button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-pink-400"
          data-testid="button-next"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
