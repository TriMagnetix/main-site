import React from 'react';

type DividerType = 'wave' | 'angle' | 'triangle' | 'curve';
type DividerPosition = 'top' | 'bottom';

interface SectionDividerProps {
  type: DividerType;
  position: DividerPosition;
  fillColor: string;
}

export default function SectionDivider({ type, position, fillColor }: SectionDividerProps) {
  const getWaveDivider = () => (
    <div className={`divider-${position} wave-divider`} style={{ '--divider-fill-color': fillColor } as React.CSSProperties}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
      </svg>
    </div>
  );

  const getAngleDivider = () => (
    <div className={`divider-${position} angle-divider`} style={{ '--divider-fill-color': fillColor } as React.CSSProperties}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
      </svg>
    </div>
  );

  const getTriangleDivider = () => (
    <div className={`divider-${position} triangle-divider`} style={{ '--divider-fill-color': fillColor } as React.CSSProperties}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
      </svg>
    </div>
  );


  const renderDivider = () => {
    switch (type) {
      case 'wave':
        return getWaveDivider();
      case 'angle':
        return getAngleDivider();
      case 'triangle':
        return getTriangleDivider();
      default:
        return getWaveDivider();
    }
  };

  return (
    <div className="divider">
      {renderDivider()}
    </div>
  );
}
