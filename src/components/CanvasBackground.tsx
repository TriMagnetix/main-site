'use client';

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const ctx = context;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Configuration - matching template.html exactly
    const nodeRadius = 2;
    const branchLength = 12;
    const branchWidth = 1.5;
    const gridSpacing = 60;
    const baseOpacity = 0.05;
    const maxOpacity = 0.6;
    const magneticRadius = 250;
    const pulseSpeed = 0.015; // Slowed down from 0.08 to 0.02 for much slower pulse
    const traceWidth = 1;
    const chipChance = 0.1;
    const connectionChance = 0.4;

    // Mouse tracking
    const mouse = { x: -9999, y: -9999 };

    // Node storage
    const nodes: any[] = [];
    const nodeMap = new Map();

    // Get active color - emerald green from template.html
    function getActiveColor(opacity: number) {
      // emerald-400 is rgb(52, 211, 153)
      return `rgba(52, 211, 153, ${opacity})`;
    }

    // Initialize Nodes - matching template.html
    function initNodes() {
      nodes.length = 0;
      nodeMap.clear();

      for (let y = gridSpacing / 2; y < height + gridSpacing; y += gridSpacing) {
        for (let x = gridSpacing / 2; x < width + gridSpacing; x += gridSpacing) {
          const type = Math.random() < chipChance ? 'chip' : 'yshape';
          
          let chipW = 0;
          let chipH = 0;
          if (type === 'chip') {
            chipW = Math.random() * (gridSpacing * 0.5) + (gridSpacing * 0.3);
            chipH = Math.random() * (gridSpacing * 0.5) + (gridSpacing * 0.3);
          }

          const node = {
            x,
            y,
            type,
            opacity: baseOpacity,
            pulse: 0,
            connectRight: Math.random() < connectionChance,
            connectDown: Math.random() < connectionChance,
            w: chipW,
            h: chipH
          };
          
          nodes.push(node);
          nodeMap.set(`${x},${y}`, node);
        }
      }
    }

    // Draw Y-Shape
    function drawYShape(x: number, y: number, color: string) {
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = branchWidth;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 3; i++) {
        const angle = Math.PI / 2 + i * ((2 * Math.PI) / 3);
        const endX = x + Math.cos(angle) * branchLength;
        const endY = y + Math.sin(angle) * branchLength;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    // Draw Chip
    function drawChip(x: number, y: number, w: number, h: number, color: string) {
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.rect(x - w / 2, y - h / 2, w, h);
      ctx.fill();

      ctx.lineWidth = 1;
      const pinLength = 4;
      const pinSpacing = h / 4;
      for (let i = -1; i <= 1; i += 1) {
        ctx.beginPath();
        ctx.moveTo(x - w / 2, y + pinSpacing * i);
        ctx.lineTo(x - w / 2 - pinLength, y + pinSpacing * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + w / 2, y + pinSpacing * i);
        ctx.lineTo(x + w / 2 + pinLength, y + pinSpacing * i);
        ctx.stroke();
      }
    }

    // Draw Trace
    function drawTrace(x1: number, y1: number, x2: number, y2: number, color: string) {
      ctx.strokeStyle = color;
      ctx.lineWidth = traceWidth;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(x1, y1);

      const midX = x1 + (x2 - x1) * 0.5;
      ctx.lineTo(midX, y1);
      ctx.lineTo(midX, y2);
      ctx.lineTo(x2, y2);

      ctx.stroke();
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        // Mouse Interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetOpacity = baseOpacity;

        if (dist < magneticRadius) {
          const proximity = (magneticRadius - dist) / magneticRadius;
          targetOpacity = proximity * (maxOpacity - baseOpacity) + baseOpacity;

          node.pulse += pulseSpeed;
          // Reduced pulse amplitude (from /4 to /10)
          targetOpacity = targetOpacity + Math.sin(node.pulse) * (maxOpacity / 10);
        } else {
          node.pulse = 0;
        }

        node.opacity += (targetOpacity - node.opacity) * 0.1;
        node.opacity = Math.max(baseOpacity, Math.min(maxOpacity, node.opacity));

        // Draw connections
        if (node.connectRight) {
          const neighbor = nodeMap.get(`${node.x + gridSpacing},${node.y}`);
          if (neighbor) {
            const avgOpacity = (node.opacity + (neighbor.opacity || baseOpacity)) / 2;
            drawTrace(node.x, node.y, neighbor.x, neighbor.y, getActiveColor(avgOpacity));
          }
        }
        if (node.connectDown) {
          const neighbor = nodeMap.get(`${node.x},${node.y + gridSpacing}`);
          if (neighbor) {
            const avgOpacity = (node.opacity + (neighbor.opacity || baseOpacity)) / 2;
            const color = getActiveColor(avgOpacity);
            ctx.strokeStyle = color;
            ctx.lineWidth = traceWidth;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.x, node.y + gridSpacing / 2);
            ctx.lineTo(neighbor.x, node.y + gridSpacing / 2);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
          }
        }
      });

      // Draw nodes/chips on top
      nodes.forEach((node) => {
        const color = getActiveColor(node.opacity);
        if (node.type === 'yshape') {
          drawYShape(node.x, node.y, color);
        } else {
          drawChip(node.x, node.y, node.w, node.h, color);
        }
      });

      requestAnimationFrame(animate);
    }

    // Event Listeners
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Start
    initNodes();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="architect-canvas"
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#000000' }}
    />
  );
}
