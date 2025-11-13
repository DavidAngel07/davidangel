import { IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface ScrollingTickerProps {
  technologies: Technology[];
}

const ScrollingTicker = ({ technologies }: ScrollingTickerProps) => {
  const repeatedTech = Array(10).fill(technologies).flat();

  return (
    <div className="relative overflow-hidden bg-primary-foreground py-0 border-y border-primary/20">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {repeatedTech.map((tech, index) => (
            <span key={index} className="ticker-item">
              <tech.icon className="ticker-icon" style={{ color: tech.color }} />
              {tech.name}
            </span>
          ))}
          {repeatedTech.map((tech, index) => (
            <span key={`dup-${index}`} className="ticker-item">
              <tech.icon className="ticker-icon" style={{ color: tech.color }} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .ticker-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Anton', sans-serif;
          font-size: 1.5rem;
          font-weight: 100;
          color: hsl(var(--primary));
          padding: 0 1.5rem;
        }

        .ticker-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .ticker-item {
            font-size: 2rem;
          }

          .ticker-icon {
            font-size: 2rem;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingTicker;
