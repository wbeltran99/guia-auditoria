import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface QuestionCardProps {
  id: number;
  question: string;
  answer: string;
}

export function QuestionCard({ id, question, answer }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-secondary transition-colors text-left"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
            {id}
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {question}
          </h3>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-5 bg-background border-t border-border">
          <div className="text-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-base space-y-3">
            {answer.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
