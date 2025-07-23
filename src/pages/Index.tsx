import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NeuralNetwork from '@/components/NeuralNetwork';
import ProductCarousel from '@/components/ProductCarousel';
import QuickQuiz from '@/components/QuickQuiz';
import { mockProducts } from '@/data/mockProducts';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const topModels = mockProducts.filter(p => p.category === 'model' && p.featured);
  const topAgents = mockProducts.filter(p => p.category === 'agent').slice(0, 4);
  const topAutomations = mockProducts.filter(p => p.category === 'automation');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetwork className="opacity-10 dark:opacity-20" />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-neural-secondary bg-clip-text text-transparent">
                Unlock AI Power
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Models, Agents, Automations for Everyone
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              No tech expertise needed. Browse, buy, and deploy AI solutions that actually work. 
              From ChatGPT to custom automations—we make AI accessible.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-lg px-8 py-4 cta-glow"
              onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse AI Models
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-4"
              onClick={() => setShowQuiz(true)}
            >
              Take the Quiz
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$8/mo</div>
              <div className="text-muted-foreground">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5min</div>
              <div className="text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      {showQuiz && (
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <QuickQuiz />
            <div className="text-center mt-8">
              <Button variant="ghost" onClick={() => setShowQuiz(false)}>
                Skip for now
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section id="featured-products" className="relative z-10 py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="models" className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Featured AI Solutions</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Handpicked AI tools that deliver real results
              </p>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="models">Models</TabsTrigger>
                <TabsTrigger value="agents">Agents</TabsTrigger>
                <TabsTrigger value="automations">Automations</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="models" className="mt-8">
              <ProductCarousel 
                title="Top AI Models" 
                products={topModels}
              />
            </TabsContent>
            
            <TabsContent value="agents" className="mt-8">
              <ProductCarousel 
                title="Smart AI Agents" 
                products={topAgents}
              />
            </TabsContent>
            
            <TabsContent value="automations" className="mt-8">
              <ProductCarousel 
                title="Powerful Automations" 
                products={topAutomations}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="relative z-10 py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-muted-foreground mb-8">Trusted by developers and businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">OpenAI</div>
            <div className="text-2xl font-bold">Anthropic</div>
            <div className="text-2xl font-bold">xAI</div>
            <div className="text-2xl font-bold">n8n</div>
            <div className="text-2xl font-bold">Zapier</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
