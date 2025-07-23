import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  category: 'model' | 'agent' | 'automation';
  provider: string;
  image?: string;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  rating,
  reviews,
  category,
  provider,
  image,
  featured = false
}) => {
  return (
    <Card className={`h-full transition-all duration-200 hover:shadow-lg ${featured ? 'ring-2 ring-accent' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="secondary" 
            className="bg-accent/10 text-accent border-accent/20"
          >
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-cta text-cta-foreground">
              Popular
            </Badge>
          )}
        </div>
        {image ? (
          <div className="w-full h-32 bg-secondary rounded-md mb-3 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Demo Preview</span>
          </div>
        ) : (
          <div className="w-full h-32 bg-gradient-to-br from-neural-primary/20 to-neural-secondary/20 rounded-md mb-3 flex items-center justify-center">
            <span className="text-accent font-semibold text-lg">{name}</span>
          </div>
        )}
        <h3 className="font-bold text-lg leading-tight">{name}</h3>
        <p className="text-sm text-muted-foreground">{provider}</p>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'fill-cta text-cta' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-bold text-accent">{price}</span>
          </div>
          <Button 
            className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;