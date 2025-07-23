import React from 'react';

interface NeuralNetworkProps {
  className?: string;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Nodes */}
        <g>
          {/* Layer 1 */}
          <circle cx="100" cy="150" r="4" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '0s' }} />
          <circle cx="100" cy="250" r="4" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '0.5s' }} />
          <circle cx="100" cy="350" r="4" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '1s' }} />
          <circle cx="100" cy="450" r="4" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '1.5s' }} />
          
          {/* Layer 2 */}
          <circle cx="250" cy="100" r="5" fill="hsl(var(--neural-secondary))" className="neural-node" style={{ animationDelay: '0.2s' }} />
          <circle cx="250" cy="200" r="5" fill="hsl(var(--neural-secondary))" className="neural-node" style={{ animationDelay: '0.7s' }} />
          <circle cx="250" cy="300" r="5" fill="hsl(var(--neural-secondary))" className="neural-node" style={{ animationDelay: '1.2s' }} />
          <circle cx="250" cy="400" r="5" fill="hsl(var(--neural-secondary))" className="neural-node" style={{ animationDelay: '1.7s' }} />
          <circle cx="250" cy="500" r="5" fill="hsl(var(--neural-secondary))" className="neural-node" style={{ animationDelay: '2.2s' }} />
          
          {/* Layer 3 */}
          <circle cx="400" cy="150" r="6" fill="hsl(var(--accent))" className="neural-node" style={{ animationDelay: '0.4s' }} />
          <circle cx="400" cy="250" r="6" fill="hsl(var(--accent))" className="neural-node" style={{ animationDelay: '0.9s' }} />
          <circle cx="400" cy="350" r="6" fill="hsl(var(--accent))" className="neural-node" style={{ animationDelay: '1.4s' }} />
          <circle cx="400" cy="450" r="6" fill="hsl(var(--accent))" className="neural-node" style={{ animationDelay: '1.9s' }} />
          
          {/* Layer 4 */}
          <circle cx="550" cy="200" r="5" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '0.6s' }} />
          <circle cx="550" cy="300" r="5" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '1.1s' }} />
          <circle cx="550" cy="400" r="5" fill="hsl(var(--neural-primary))" className="neural-node" style={{ animationDelay: '1.6s' }} />
          
          {/* Layer 5 */}
          <circle cx="700" cy="250" r="7" fill="hsl(var(--cta))" className="neural-node" style={{ animationDelay: '0.8s' }} />
          <circle cx="700" cy="350" r="7" fill="hsl(var(--cta))" className="neural-node" style={{ animationDelay: '1.3s' }} />
        </g>
        
        {/* Neural Network Connections */}
        <g stroke="hsl(var(--accent) / 0.3)" strokeWidth="1" fill="none">
          {/* Layer 1 to Layer 2 connections */}
          <line x1="104" y1="150" x2="246" y2="100" className="neural-connection" style={{ animationDelay: '0s' }} />
          <line x1="104" y1="150" x2="246" y2="200" className="neural-connection" style={{ animationDelay: '0.1s' }} />
          <line x1="104" y1="250" x2="246" y2="200" className="neural-connection" style={{ animationDelay: '0.2s' }} />
          <line x1="104" y1="250" x2="246" y2="300" className="neural-connection" style={{ animationDelay: '0.3s' }} />
          <line x1="104" y1="350" x2="246" y2="300" className="neural-connection" style={{ animationDelay: '0.4s' }} />
          <line x1="104" y1="350" x2="246" y2="400" className="neural-connection" style={{ animationDelay: '0.5s' }} />
          <line x1="104" y1="450" x2="246" y2="400" className="neural-connection" style={{ animationDelay: '0.6s' }} />
          <line x1="104" y1="450" x2="246" y2="500" className="neural-connection" style={{ animationDelay: '0.7s' }} />
          
          {/* Layer 2 to Layer 3 connections */}
          <line x1="255" y1="100" x2="394" y2="150" className="neural-connection" style={{ animationDelay: '0.8s' }} />
          <line x1="255" y1="200" x2="394" y2="150" className="neural-connection" style={{ animationDelay: '0.9s' }} />
          <line x1="255" y1="200" x2="394" y2="250" className="neural-connection" style={{ animationDelay: '1s' }} />
          <line x1="255" y1="300" x2="394" y2="250" className="neural-connection" style={{ animationDelay: '1.1s' }} />
          <line x1="255" y1="300" x2="394" y2="350" className="neural-connection" style={{ animationDelay: '1.2s' }} />
          <line x1="255" y1="400" x2="394" y2="350" className="neural-connection" style={{ animationDelay: '1.3s' }} />
          <line x1="255" y1="400" x2="394" y2="450" className="neural-connection" style={{ animationDelay: '1.4s' }} />
          <line x1="255" y1="500" x2="394" y2="450" className="neural-connection" style={{ animationDelay: '1.5s' }} />
          
          {/* Layer 3 to Layer 4 connections */}
          <line x1="406" y1="150" x2="544" y2="200" className="neural-connection" style={{ animationDelay: '1.6s' }} />
          <line x1="406" y1="250" x2="544" y2="200" className="neural-connection" style={{ animationDelay: '1.7s' }} />
          <line x1="406" y1="250" x2="544" y2="300" className="neural-connection" style={{ animationDelay: '1.8s' }} />
          <line x1="406" y1="350" x2="544" y2="300" className="neural-connection" style={{ animationDelay: '1.9s' }} />
          <line x1="406" y1="350" x2="544" y2="400" className="neural-connection" style={{ animationDelay: '2s' }} />
          <line x1="406" y1="450" x2="544" y2="400" className="neural-connection" style={{ animationDelay: '2.1s' }} />
          
          {/* Layer 4 to Layer 5 connections */}
          <line x1="555" y1="200" x2="693" y2="250" className="neural-connection" style={{ animationDelay: '2.2s' }} />
          <line x1="555" y1="300" x2="693" y2="250" className="neural-connection" style={{ animationDelay: '2.3s' }} />
          <line x1="555" y1="300" x2="693" y2="350" className="neural-connection" style={{ animationDelay: '2.4s' }} />
          <line x1="555" y1="400" x2="693" y2="350" className="neural-connection" style={{ animationDelay: '2.5s' }} />
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetwork;