import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuickQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What's your main goal with AI?",
      options: [
        "Save time on repetitive tasks",
        "Create content and write better", 
        "Analyze data and make decisions",
        "Build custom solutions"
      ]
    },
    {
      question: "How tech-savvy are you?",
      options: [
        "Beginner - I prefer simple, ready-to-use tools",
        "Intermediate - I can follow tutorials",
        "Advanced - I can customize and integrate",
        "Expert - I build my own solutions"
      ]
    },
    {
      question: "What's your budget range?",
      options: [
        "Free or under $20/month",
        "$20-100/month",
        "$100-500/month", 
        "$500+/month"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendations = () => {
    // Simple logic based on answers
    if (answers.includes("Beginner - I prefer simple, ready-to-use tools")) {
      return ["ChatGPT", "Email Assistant Pro", "Social Media Manager"];
    } else if (answers.includes("Save time on repetitive tasks")) {
      return ["Email Assistant Pro", "Data Pipeline Automation", "Customer Support Bot"];
    } else {
      return ["Claude", "GPT-4 Vision", "Lead Generation System"];
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-accent">Your Personalized AI Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {getRecommendations().map((rec, index) => (
              <Badge key={index} variant="outline" className="mr-2 mb-2 text-lg py-2 px-4">
                {rec}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <Button 
              className="flex-1 bg-cta hover:bg-cta/90 text-cta-foreground"
              onClick={() => {/* Navigate to recommendations */}}
            >
              View Recommendations
            </Button>
            <Button variant="outline" onClick={resetQuiz}>
              Retake Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Find Your Perfect AI Match</CardTitle>
        <p className="text-muted-foreground">
          2-minute quiz • Question {currentQuestion + 1} of {questions.length}
        </p>
        <div className="w-full bg-secondary rounded-full h-2 mt-4">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto py-4 px-6 hover:bg-accent hover:text-accent-foreground"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickQuiz;