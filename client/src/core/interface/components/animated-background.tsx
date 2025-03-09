import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Node class for web points
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: Node[];
      webProgress: number;
      isAnchor: boolean;

      constructor(x?: number, y?: number, isAnchor: boolean = false) {
        this.x = x ?? Math.random() * window.innerWidth;
        this.y = y ?? Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = isAnchor ? 3 : 2;
        this.connections = [];
        this.webProgress = 0;
        this.isAnchor = isAnchor;
      }

      update() {
        if (!this.isAnchor) {
          // Update position with damping
          this.x += this.vx * Math.sin(this.webProgress * 0.1);
          this.y += this.vy * Math.sin(this.webProgress * 0.1);

          // Bounce off edges with reduced speed
          if (this.x < 0 || this.x > window.innerWidth) {
            this.vx *= -0.8;
            this.x = Math.max(0, Math.min(window.innerWidth, this.x));
          }
          if (this.y < 0 || this.y > window.innerHeight) {
            this.vy *= -0.8;
            this.y = Math.max(0, Math.min(window.innerHeight, this.y));
          }
        }

        // Gradually build web connections
        this.webProgress += 0.5;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isAnchor
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.5)";
        ctx.fill();

        // Draw web connections with progress animation
        this.connections.forEach((connection) => {
          const distance = Math.hypot(
            connection.x - this.x,
            connection.y - this.y
          );
          const progress = Math.min(1, this.webProgress / distance);

          if (progress > 0) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            const endX = this.x + (connection.x - this.x) * progress;
            const endY = this.y + (connection.y - this.y) * progress;
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.2 * (1 - distance / 500)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
    }

    // Create anchor nodes and regular nodes
    const anchorNodes = Array.from(
      { length: 8 }, // Increased from 5 to 8 anchor nodes
      () => new Node(undefined, undefined, true)
    );

    // Add initial regular nodes
    const initialNodes = Array.from(
      { length: 15 }, // Add 15 regular nodes to start
      () => new Node()
    );

    let nodes: Node[] = [...anchorNodes, ...initialNodes];

    // Connect initial nodes
    initialNodes.forEach((node) => {
      const possibleConnections = [...nodes].sort(() => Math.random() - 0.5);
      const connectionCount = Math.floor(Math.random() * 2) + 2;
      node.connections = possibleConnections.slice(0, connectionCount);
    });

    // Function to add new nodes over time
    const addNode = (x?: number, y?: number) => {
      if (nodes.length < 40) {
        // Increased max nodes from 30 to 40
        const newNode = new Node(x, y);
        // Connect to 2-3 closest nodes
        const possibleConnections = [...nodes].sort(() => Math.random() - 0.5);
        const connectionCount = Math.floor(Math.random() * 2) + 2;
        newNode.connections = possibleConnections.slice(0, connectionCount);
        nodes.push(newNode);
      }
    };

    // Handle mouse click
    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      addNode(x, y);
    };

    canvas.addEventListener("click", handleClick);

    // Periodically add new nodes
    const addNodeInterval = setInterval(() => addNode(), 2000);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      nodes.forEach((node) => {
        node.update();
        node.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("click", handleClick);
      clearInterval(addNodeInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};
